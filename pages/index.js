import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Experience from "../components/home/Experience";
import Contact from "../components/home/Contact";
import Work from "../components/work/Work";
import Head from "next/head";
import Home from "../components/home/Home";
import Blogs from "../components/home/Blogs";
import { getBlogList } from "../lib/notion";

export default function Index({ notionPosts = [] }) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const sync = () => {
      if (window.location.hash === "#blogs") setActiveSection("blogs");
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const title = "Kaushal Nerkar | AI & Cloud Engineer";

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Work />;
      case 'blogs':
        return <Blogs notionPosts={notionPosts} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
      <>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{title}</title>
          <link rel="icon" href="/favicon.png" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                url: "",
                name: "Kaushal V Nerkar | Software Developer",
                description: "Portfolio website",
                founder: [{ "@type": "Person", name: "Kaushal V Nerkar" }],
              }),
            }}
          />
          <meta property="og:title" content="Kaushal Nerkar" />
        </Head>

        <Layout activeSection={activeSection} setActiveSection={setActiveSection}>
            {renderContent()}
        </Layout>
      </>
  );
}

const REVALIDATE_BLOG_LIST = 12 * 60 * 60; // 12h

export async function getStaticProps() {
  try {
    const notionPosts = await getBlogList();
    return { props: { notionPosts }, revalidate: REVALIDATE_BLOG_LIST };
  } catch (err) {
    console.error("getStaticProps index (notion blog list):", err);
    return { props: { notionPosts: [] }, revalidate: REVALIDATE_BLOG_LIST };
  }
}
