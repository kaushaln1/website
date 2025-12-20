import { useState } from "react";

/**
 *
 * Expertise component. Here you can explain your Experiences.
 *
 * @param {String} title - Title of the component.
 * @param {String} subtitle - Subtitle of the component.
 *
 */

export default function Experience() {
    const [texts] = useState({
        title: `<strong>Experience,</strong> where I worked before`,
        subtitle: `What I have done before, where I worked before and which position I was before`,
    });

    const experienceData = [
        {
            title: "AI Engineer",
            company: "Linvest21",
            location: "Remote",
            period: "September 2024 – Present",
            description: [
                "Engineered a scalable data ingestion pipeline using <strong>Apache Airflow</strong> and <strong>AWS Lambda</strong>, reducing data processing latency by <strong>40%</strong>.",
                "Developed a RAG-based AI chatbot using <strong>LangChain</strong> and <strong>LangGraph</strong>, serving financial insights with <strong><2s response time</strong>.",
                "Designed the \"Investor Intelligence\" system, integrating real-time market data APIs and reducing financial analysis time for clients by <strong>60%</strong>.",
                "Optimized cloud infrastructure on AWS, achieving <strong>99.9% uptime</strong> for AI services and ensuring scalable deployment."
            ]
        },
        {
            title: "Senior Software Developer",
            company: "HSBC Software Development India",
            location: "Pune, Maharashtra",
            period: "July 2019 – July 2023",
            description: [
                "Architected and deployed microservices on <strong>Kubernetes</strong>, serving <strong>1M+ daily transactions</strong> with 99.99% availability.",
                "Reduced deployment time by <strong>75%</strong> by designing modular <strong>Jenkins CI/CD pipelines</strong> with automated testing and security scans (SonarQube, Trivy).",
                "Optimized database performance for AWS Aurora, reducing query latency by <strong>30%</strong> via query tuning and connection pooling.",
                "Implemented comprehensive monitoring using <strong>Splunk</strong> and <strong>AppDynamics</strong>, reducing Mean Time To Resolution (MTTR) by <strong>50%</strong>."
            ]
        },
        {
            title: "Intern",
            company: "Defense Research and Development Organization (DRDO)",
            location: "Pune, Maharashtra",
            period: "May 2018 - July 2018",
            description: [
                "Built a secure local repository server for sensitive defense systems, reducing update bandwidth usage by <strong>90%</strong>.",
                "Automated patch management using <strong>Shell scripts</strong> and <strong>Cron jobs</strong>, ensuring 100% compliance across 50+ isolated servers.",
                "Reduced system update time by <strong>40%</strong> through localized package mirroring and optimized network protocols."
            ]
        }
    ];

    return (
        <>
            <section id="section2">
                <div className="content">
                    <h2 dangerouslySetInnerHTML={{ __html: texts.title }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: texts.subtitle }}></p>
                    
                    <div className="experience-list">
                        {experienceData.map((item, index) => (
                            <div className="experience-card" key={index}>
                                <div className="card-header">
                                    <div className="role-company">
                                        <h3>{item.title}</h3>
                                        <h4>{item.company}</h4>
                                    </div>
                                    <div className="meta">
                                        <span className="location">{item.location}</span>
                                        <span className="period">{item.period}</span>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul>
                                        {item.description.map((desc, i) => (
                                            <li key={i} dangerouslySetInnerHTML={{ __html: desc }}></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <style jsx>{`
          section {
              position: relative;
              display: flex;
              flex-direction: column;
              padding: 4vw 5.103vw 4vw 10.317vw;
              background-color: #2d3436;
          }

          section .content {
              display: flex;
              flex-direction: column;
          }

          section .content h2 {
              font-family: Quicksand, -apple-system, BlinkMacSystemFont, "Segoe UI",
              Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
              font-style: normal;
              font-weight: 300;
              font-size: 3.43391vw;
              line-height: 122%;
              color: #ffffff;
              margin-bottom: 2.513vw;
          }

          section .content p {
              font-family: Quicksand, -apple-system, BlinkMacSystemFont, "Segoe UI",
              Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
              font-style: normal;
              font-weight: 300;
              font-size: 1.5873vw;
              line-height: 140%;
              color: #dfe6e9;
              margin-bottom: 4vw;
          }

          .experience-list {
              display: flex;
              flex-direction: column;
              gap: 30px;
          }

          .experience-card {
              background: #1e272e;
              border-radius: 12px;
              padding: 30px;
              border: 1px solid #2d3436;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .experience-card:hover {
              transform: translateY(-2px);
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
              border-color: #0984e3;
          }

          .card-header {
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              margin-bottom: 20px;
              border-bottom: 1px solid #636e72;
              padding-bottom: 15px;
          }

          .role-company h3 {
              color: #ffffff;
              font-size: 1.5rem;
              margin-bottom: 5px;
              font-family: Quicksand, sans-serif;
              font-weight: 600;
          }

          .role-company h4 {
              color: #74b9ff;
              font-size: 1.2rem;
              font-weight: 500;
              font-family: Quicksand, sans-serif;
          }

          .meta {
              text-align: right;
              display: flex;
              flex-direction: column;
              align-items: flex-end;
          }

          .meta .location {
              color: #b2bec3;
              font-size: 0.9rem;
              margin-bottom: 4px;
          }

          .meta .period {
              color: #dfe6e9;
              font-weight: 500;
              font-size: 1rem;
          }

          .card-body ul {
              list-style-type: none;
              padding: 0;
              margin: 0;
          }

          .card-body li {
              position: relative;
              padding-left: 20px;
              margin-bottom: 12px;
              color: #dfe6e9;
              line-height: 1.6;
              font-size: 1rem;
          }

          .card-body li::before {
              content: "▹";
              position: absolute;
              left: 0;
              color: #0984e3;
          }

          /* Mobile styles */
          @media screen and (max-width: 992px) {
              section {
                  padding: 35px 22px;
              }

              section .content h2 {
                  font-size: 29px;
                  line-height: 122%;
                  width: 87%;
                  margin-bottom: 17px;
              }

              section .content p {
                  font-size: 15px;
                  line-height: 20px;
                  width: 100%;
                  margin-bottom: 32px;
              }

              .card-header {
                  flex-direction: column;
                  gap: 15px;
              }

              .meta {
                  text-align: left;
                  align-items: flex-start;
              }
              
              .role-company h3 {
                  font-size: 1.3rem;
              }
          }
      `}</style>
            <style jsx global>{`
        #section2 .content h2 strong {
          font-weight: 500;
        }
        
        /* Highlight styling within the description text */
        .card-body li strong {
            color: #81ecec;
            font-weight: 500;
        }
      `}</style>
        </>
    );
}
