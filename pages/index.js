import CommonFooter from "../components/CommonFooter";
import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Experience from "../components/home/Experience";
import Contact from "../components/home/Contact";
import Work from "../components/work/Work";
import { BrowserView, MobileView } from "react-device-detect";
import Projects from "../components/home/Projects";
import Head from "next/head";
import parse from "html-react-parser";
import Home from "../components/home/Home";
import SkillsSection from "../components/home/SkillsSection";
import Blogs from "../components/home/Blogs";

export default function Index() {
  const [texts] = useState({
    title: `Kaushal | Devops, SDE`,
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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        } else {
          entry.target.classList.remove("fade-in");
        }
      });
    });

    const section2 = document.querySelector("#section2");
    if (section2) {
      observer.observe(section2);
    }

    setTimeout(() => {
      const leaderboard = document.querySelector(".vl-leaderboard");
      if (leaderboard) {
        leaderboard.style.display = "none";
      }
    }, 50);
  }, []);

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
        <Navigation />
        <main>
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <section id="home"><Home /></section>
              <section id="skills"><SkillsSection /></section>
              <section id="portfolio">
                <BrowserView><Work /></BrowserView>
                <MobileView><Projects /></MobileView>
              </section>
              <section id="experience"><Experience /></section>
              <section id="blogs"><Blogs /></section>
              <section id="contact"><Contact /></section>
            </div>
          </div>
        </main>
        <CommonFooter />
        {/*<div id="popup-trigger" data-vl-widget="popupTrigger" style={{ opacity: 0 }}></div>*/}
      </>
  );
}
