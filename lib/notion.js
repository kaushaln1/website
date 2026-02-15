const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");

// In-memory cache for dev only: getStaticProps runs on every request in dev, so each load hits Notion.
// First load is still slow (Notion API + notion-to-md fetching blocks); repeat loads within 1min are fast.
const CACHE_TTL_MS = 60 * 1000; // 1 minute
const cache = {
  blogList: null,
  blogListTime: 0,
  postsBySlug: new Map(),
};

function isCacheValid(updatedAt) {
  return Date.now() - updatedAt < CACHE_TTL_MS;
}

/**
 * Notion client – server-side only. Uses env: notion_secret_key, notion_database_id.
 * Requires @notionhq/client@2 (v5 uses a different API and returns "Invalid request URL").
 */
function getNotionClient() {
  const secret = process.env.notion_secret_key || process.env.NOTION_SECRET_KEY;
  if (!secret) {
    throw new Error("Missing notion_secret_key or NOTION_SECRET_KEY in environment.");
  }
  return new Client({ auth: secret });
}

function getDatabaseId() {
  return process.env.notion_database_id || process.env.NOTION_DATABASE_ID;
}

/**
 * Get title from a Notion page (supports Title, Name, or first title-type property).
 */
function getPageTitle(page) {
  const props = page.properties;
  const titleProp = props.Title || props.Name || props.title;
  if (titleProp?.title?.[0]?.plain_text) return titleProp.title[0].plain_text;
  const firstTitle = Object.values(props).find((p) => p.type === "title");
  return firstTitle?.title?.[0]?.plain_text ?? "Untitled";
}

/**
 * Get slug from a Notion page (Slug rich_text, or slug, or fallback to page id).
 */
function getPageSlug(page) {
  const props = page.properties;
  const slugProp = props.Slug || props.slug;
  const text = slugProp?.rich_text?.[0]?.plain_text || slugProp?.formula?.string;
  if (text) return String(text).trim();
  return page.id.replace(/-/g, "");
}

/**
 * Returns true if the page should be shown. If Status property exists and has a select value, only "Published" passes.
 * If there is no Status property, all pages pass (so you see all until you add Status).
 */
function isPublished(page) {
  const statusProp = page.properties.Status || page.properties.status;
  if (!statusProp) return true;
  const value = statusProp.select?.name;
  if (value === undefined || value === null) return true;
  return String(value).toLowerCase() === "published";
}

/**
 * Fetch list of blog posts from the Notion database.
 * - If your DB has a Status (select) property with "Published", only those pages are shown.
 * - If there is no Status property, all pages in the database are shown.
 * Expects: Slug (rich_text) or slug, and a title property (Title, Name, or default title).
 * @returns {Promise<Array<{ id: string, slug: string, title: string, created: string }>>}
 */
async function getBlogList() {
  if (process.env.NODE_ENV !== "production" && cache.blogList && isCacheValid(cache.blogListTime)) {
    return cache.blogList;
  }

  const notion = getNotionClient();
  const databaseId = getDatabaseId();
  if (!databaseId) {
    console.warn("[Notion Blog] Missing notion_database_id; returning empty list.");
    return [];
  }

  try {
    const response = await notion.databases.query({
      database_id: databaseId.trim(),
      sorts: [{ timestamp: "created_time", direction: "descending" }],
    });

    const all = response.results || [];
    const published = all.filter(isPublished);
    const posts = published.map((page) => ({
      id: page.id,
      slug: getPageSlug(page),
      title: getPageTitle(page),
      created: page.created_time || "",
    }));

    if (process.env.NODE_ENV !== "production") {
      cache.blogList = posts;
      cache.blogListTime = Date.now();
      console.log("[Notion Blog] getBlogList: total pages =", all.length, "| published =", published.length);
    }
    return posts;
  } catch (err) {
    console.error("[Notion Blog] getBlogList error:", err.message);
    if (err.code === "object_not_found") {
      console.error("[Notion Blog] Database not found or not shared with your integration. Share the database with the integration (Share → Invite → your app).");
    }
    if (err.code === "validation_error") {
      console.error("[Notion Blog] Check that notion_database_id is correct and the database has the right structure.");
    }
    return [];
  }
}

/**
 * Fetch a single post by its Slug property. Returns null if not found.
 * If the page has Status select, only "Published" pages are returned.
 * Fetches full page content (blocks) for rendering.
 * @param {string} slug - Value of the Slug property
 * @returns {Promise<{ id: string, slug: string, title: string, created: string, markdown: string } | null>}
 */
async function getPostBySlug(slug) {
  if (!slug) return null;

  const slugKey = String(slug).trim();
  if (process.env.NODE_ENV !== "production") {
    const cached = cache.postsBySlug.get(slugKey);
    if (cached && isCacheValid(cached.time)) return cached.post;
  }

  const notion = getNotionClient();
  const databaseId = getDatabaseId();
  if (!databaseId) return null;

  const slugPropsToTry = ["Slug", "slug"];

  for (const propName of slugPropsToTry) {
    try {
      const response = await notion.databases.query({
        database_id: databaseId.trim(),
        filter: { property: propName, rich_text: { equals: slugKey } },
      });
      const page = response.results[0];
      if (!page) continue;
      if (!isPublished(page)) return null;

      const title = getPageTitle(page);
      const resolvedSlug = getPageSlug(page);
      const created = page.created_time || "";

      const n2m = new NotionToMarkdown({ notionClient: notion });
      const mdBlocks = await n2m.pageToMarkdown(page.id);
      const mdString = n2m.toMarkdownString(mdBlocks);
      const markdown = mdString.parent || "";

      const post = { id: page.id, slug: resolvedSlug, title, created, markdown };
      if (process.env.NODE_ENV !== "production") {
        cache.postsBySlug.set(slugKey, { post, time: Date.now() });
      }
      return post;
    } catch (e) {
      continue;
    }
  }

  return null;
}

/**
 * Get all slugs for static path generation (e.g. getStaticPaths).
 * @returns {Promise<string[]>}
 */
async function getAllSlugs() {
  const posts = await getBlogList();
  return posts.map((p) => p.slug).filter(Boolean);
}

module.exports = {
  getNotionClient,
  getBlogList,
  getPostBySlug,
  getAllSlugs,
};
