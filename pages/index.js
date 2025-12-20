import { useState } from "react";
import Layout from "../components/Layout";
import Experience from "../components/home/Experience";
import Contact from "../components/home/Contact";
import Work from "../components/work/Work";
import Head from "next/head";
import parse from "html-react-parser";
import Home from "../components/home/Home";
import Blogs from "../components/home/Blogs";

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [texts] = useState({
    title: `Kaushal | MLOps, ML Engineer`,
    head: `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": "",
      "name": "Kaushal V Nerkar | Software Developer",
      "description": "Portfolio website",
      "founder": [
        {
            "@type": "Person",
            "name": "Kaushal V Nerkar"
        }
      ]
    }
    </script>
    <meta property="og:title" content="Kaushal Nerkar" />`
  });

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Work />;
      case 'blogs':
        return <Blogs />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
      <>
        <Head>
          <script src="https://www.googleoptimize.com/optimize.js?id=OPT-KMD99G5"></script>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>{texts.title}</title>
          <link rel="icon" href="/favicon.png" />
          {parse(texts.head)}
        </Head>
        
        <Layout activeSection={activeSection} setActiveSection={setActiveSection}>
            {renderContent()}
        </Layout>
      </>
  );
}
