import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import { getPostBySlug, getAllSlugs } from "../../lib/notion";

export default function BlogPost({ post }) {
  if (!post) {
    return (
      <>
        <Head>
          <title>Post not found | Kaushal Nerkar</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <div className="blog-page">
          <p>Post not found.</p>
          <Link href="/#blogs">← Back to Blogs</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} | Kaushal Nerkar</title>
        <meta name="description" content={post.title} />
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <article className="blog-page">
        <header className="post-header">
          <Link href="/#blogs" className="back-link">
            ← Blogs
          </Link>
          <h1>{post.title}</h1>
          {post.created && (
            <time className="post-date">
              {new Date(post.created).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
        </header>

        <div className="post-body">
          <ReactMarkdown rehypePlugins={[rehypeSanitize]}>{post.markdown}</ReactMarkdown>
        </div>
      </article>

      <style jsx>{`
        .blog-page {
          min-height: 100vh;
          background-color: #1a1d23;
          padding: 2rem 1.5rem;
          font-family: "Sora", sans-serif;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .post-header {
          max-width: 1000px;
          margin: 0 auto 2rem;
        }

        .back-link {
          color: #4f9eff;
          text-decoration: none;
          font-size: 0.95rem;
          margin-bottom: 1rem;
          display: inline-block;
        }

        .back-link:hover {
          color: #6baeff;
          text-decoration: underline;
        }

        .post-header h1 {
          color: #e8eaf2;
          font-size: 2rem;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 0.5rem;
        }

        .post-date {
          color: #8a94ae;
          font-size: 0.95rem;
        }

        .post-body {
          max-width: 1000px;
          margin: 0 auto;
          color: #8a94ae;
          line-height: 1.7;
        }

        .post-body :global(h1) {
          color: #e8eaf2;
          font-size: 1.5rem;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }

        .post-body :global(h2) {
          color: #e8eaf2;
          font-size: 1.25rem;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .post-body :global(h3) {
          color: #e8eaf2;
          font-size: 1.1rem;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .post-body :global(p) {
          margin-bottom: 1rem;
        }

        .post-body :global(ul),
        .post-body :global(ol) {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
        }

        .post-body :global(li) {
          margin-bottom: 0.25rem;
        }

        .post-body :global(a) {
          color: #4f9eff;
          text-decoration: none;
        }

        .post-body :global(a:hover) {
          text-decoration: underline;
        }

        .post-body :global(code) {
          background: #21252e;
          padding: 0.2em 0.4em;
          border-radius: 4px;
          font-size: 0.9em;
          color: #e8eaf2;
        }

        .post-body :global(pre) {
          background: #21252e;
          padding: 1rem;
          border-radius: 8px;
          overflow-x: auto;
          margin-bottom: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.07);
        }

        .post-body :global(pre code) {
          background: none;
          padding: 0;
        }

        .post-body :global(blockquote) {
          border-left: 4px solid #4f9eff;
          margin: 1rem 0;
          padding-left: 1rem;
          color: #8a94ae;
        }
      `}</style>
    </>
  );
}

/**
 * Generate paths for all published posts (required for static export).
 */
export async function getStaticPaths() {
  try {
    const slugs = await getAllSlugs();
    const paths = slugs.map((slug) => ({ params: { slug } }));
    return { paths, fallback: "blocking" };
  } catch (err) {
    console.error("getStaticPaths blog [slug]:", err);
    return { paths: [], fallback: "blocking" };
  }
}

/** Revalidate every 12 hours so Notion changes appear without redeploy. */
const REVALIDATE_SECONDS = 12 * 60 * 60; // 12h = twice a day

export async function getStaticProps({ params }) {
  const slug = params.slug;
  try {
    const post = await getPostBySlug(slug);
    return { props: { post: post || null }, revalidate: REVALIDATE_SECONDS };
  } catch (err) {
    console.error("getStaticProps blog [slug]:", err);
    return { props: { post: null }, revalidate: REVALIDATE_SECONDS };
  }
}
