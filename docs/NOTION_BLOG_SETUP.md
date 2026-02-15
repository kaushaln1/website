# Notion Blog – Why no posts show & how to fix

**Note:** This project uses `@notionhq/client@2` (not v5). v5 uses a `data_sources` API that can return "Invalid request URL"; v2 uses the stable `databases.query` endpoint. Do not upgrade the Notion client past v2.x for the blog to keep working.

**ISR (revalidate):** Blog pages use `revalidate: 43200` (12 hours), so Notion changes appear within ~12 hours without redeploying. This requires a **Node server** (e.g. Vercel, Netlify, or `next start`). Static-only hosts (e.g. GitHub Pages with static export) cannot run ISR.

## 1. Check the terminal when you open `/blog`

Run `npm run dev`, open **http://localhost:3000/blog**, and watch the terminal (not the browser console). You should see:

- **`[Notion Blog] getBlogList: total pages = X | published = Y`**  
  - If **total = 0**: the database is empty, not shared with the integration, or the ID is wrong.  
  - If **total > 0** but **published = 0**: you have pages but none with Status = "Published" (or no Status property, in which case all should count as published).

- **`[Notion Blog] getBlogList error: ...`**  
  Use the error message below to fix.

## 2. Common causes and fixes

### Database not shared with the integration

- In Notion, open your **blog database** (the one whose ID is in `notion_database_id`).
- Click **Share** (top right) → **Invite** → choose your **integration** (the one whose token is in `notion_secret_key`).
- The integration must have at least **Read content** access.

### Wrong or missing database ID

- In Notion, open the database as a **full page** (not inline).
- The URL is: `https://notion.so/workspace/XXXXXXXX?v=...`.  
  The **XXXXXXXX** part is the database ID (32 hex chars, with or without hyphens).
- Copy that ID into `.env.local` as `notion_database_id=...` (no spaces, no quotes).
- Restart the dev server after changing `.env.local`.

### Missing or different property names

The code expects (any of these work):

- **Title**: a **Title** (or **Name**, or default title) property for the post title.
- **Slug**: a **Slug** property (type **Text**) used in the URL, e.g. `my-first-post` → `/blog/my-first-post`.
- **Status** (optional): a **Select** property. If it exists, only options named exactly **Published** (case-insensitive) are shown. If you don’t have Status, all pages in the database are shown.

If your Slug property is named something else (e.g. `slug` lowercase) or is a Formula, the list page may still work but links might not; the single-post page filters by a property named **Slug** (capital S). Rename the column to **Slug** or we can add support for another name.

### No pages or no published pages

- Add at least one row in the database.
- Give it a **Slug** (e.g. `hello-world`).
- If you use **Status**, set it to **Published**.

## 3. Quick checklist

- [ ] Integration created at [notion.so/my-integrations](https://www.notion.so/my-integrations).
- [ ] Database is **shared with the integration** (Share → Invite → your app).
- [ ] `.env.local` has `notion_secret_key` and `notion_database_id` (restart dev server after edits).
- [ ] Database has a **Text** property named **Slug** and a **Title** (or **Name**) for the post title.
- [ ] At least one page has **Slug** filled (e.g. `my-post`). If you use **Status**, set it to **Published**.

After changes, refresh **http://localhost:3000/blog** and check the terminal log again.
