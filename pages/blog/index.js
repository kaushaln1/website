import Head from "next/head";
import Link from "next/link";
import { getBlogList } from "../../lib/notion";

export default function BlogIndex({ posts }) {
  return (
    <>
      <Head>
        <title>Blog | Kaushal Nerkar</title>
        <meta name="description" content="Blog posts from Notion." />
        <link rel="icon" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="blog-page">
        <header className="blog-header">
          <Link href="/#blogs" className="back-link">
            ← Blogs
          </Link>
          <h1>Blog</h1>
          <p className="subtitle">Posts from Notion</p>
        </header>

        <section className="post-list">
          {!posts || posts.length === 0 ? (
            <p className="empty">No published posts yet.</p>
          ) : (
            <ul>
              {posts.map((post) => (
                <li key={post.id}>
                  <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
                    <span className="post-title">{post.title}</span>
                    {post.created && (
                      <span className="post-date">
                        {new Date(post.created).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      <style jsx>{`
        .blog-page {
          min-height: 100vh;
          background-color: #1a1d23;
          padding: 2rem;
          font-family: "Sora", sans-serif;
        }

        .blog-header {
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

        .blog-header h1 {
          color: #e8eaf2;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .subtitle {
          color: #8a94ae;
          font-size: 1rem;
        }

        .post-list {
          max-width: 1000px;
          margin: 0 auto;
        }

        .post-list ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .post-list li {
          margin-bottom: 1rem;
        }

        .post-list li a {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 1rem;
          padding: 1rem 1.25rem;
          background: #21252e;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 10px;
          color: #8a94ae;
          text-decoration: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .post-list li a:hover {
          border-color: rgba(79, 158, 255, 0.35);
          box-shadow: 0 4px 12px rgba(79, 158, 255, 0.1);
        }

        .post-title {
          font-weight: 600;
          color: #e8eaf2;
        }

        .post-date {
          font-size: 0.9rem;
          color: #8a94ae;
          flex-shrink: 0;
        }

        .empty {
          color: #8a94ae;
          text-align: center;
          padding: 3rem;
        }
      `}</style>
    </>
  );
}

/** Revalidate every 12 hours so Notion changes appear without redeploy. */
const REVALIDATE_SECONDS = 12 * 60 * 60; // 12h = twice a day

export async function getStaticProps() {
  try {
    const posts = await getBlogList();
    return { props: { posts }, revalidate: REVALIDATE_SECONDS };
  } catch (err) {
    console.error("getStaticProps blog index:", err);
    return { props: { posts: [] }, revalidate: REVALIDATE_SECONDS };
  }
}
