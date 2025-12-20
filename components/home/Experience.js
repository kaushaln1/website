import { useState } from "react";
import SectionHeading from "../SectionHeading";

export default function Experience() {
    const [texts] = useState({
        title: `<strong>Experience</strong>`,
        subtitle: `My professional journey.`,
    });

    const experienceData = [
        {
            title: "AI Engineer",
            company: "Linvest21",
            location: "Remote",
            period: "Sept 2024 – Present",
            description: [
                "Engineered a scalable data ingestion pipeline using <strong>Apache Airflow</strong> and <strong>AWS Lambda</strong>.",
                "Developed a RAG-based AI chatbot using <strong>LangChain</strong> with <strong><2s response time</strong>.",
                "Designed the \"Investor Intelligence\" system, reducing analysis time by <strong>60%</strong>.",
                "Optimized AWS infrastructure achieving <strong>99.9% uptime</strong>."
            ]
        },
        {
            title: "Senior Software Developer",
            company: "HSBC Software",
            location: "Pune, India",
            period: "July 2019 – July 2023",
            description: [
                "Architected microservices on <strong>Kubernetes</strong> serving <strong>1M+ daily transactions</strong>.",
                "Reduced deployment time by <strong>75%</strong> via modular <strong>Jenkins CI/CD</strong>.",
                "Optimized AWS Aurora query latency by <strong>30%</strong>.",
                "Implemented <strong>Splunk</strong>/<strong>AppDynamics</strong> monitoring, reducing MTTR by <strong>50%</strong>."
            ]
        },
        {
            title: "Intern",
            company: "DRDO",
            location: "Pune, India",
            period: "May 2018 - July 2018",
            description: [
                "Built secure repository server reducing bandwidth by <strong>90%</strong>.",
                "Automated patch management ensuring 100% compliance across 50+ servers."
            ]
        }
    ];

    return (
        <>
            <section id="experience">
                <div className="content">
                    <SectionHeading title={texts.title} />
                    
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
          }

          .experience-list {
              display: flex;
              flex-direction: column;
              gap: 15px;
          }

          .experience-card {
              background: #1e272e;
              border-radius: 8px;
              padding: 20px;
              border: 1px solid #2d3436;
              transition: transform 0.2s ease, border-color 0.2s ease;
          }

          .experience-card:hover {
              border-color: #0984e3;
              transform: translateX(5px);
          }

          .card-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 12px;
              border-bottom: 1px solid #2d3436;
              padding-bottom: 8px;
          }

          .role-company h3 {
              color: #ffffff;
              font-size: 1.1rem;
              margin-bottom: 2px;
              font-family: Quicksand, sans-serif;
              font-weight: 600;
          }

          .role-company h4 {
              color: #74b9ff;
              font-size: 0.95rem;
              font-weight: 500;
              font-family: Quicksand, sans-serif;
          }

          .meta {
              text-align: right;
          }

          .meta .location {
              color: #b2bec3;
              font-size: 0.8rem;
              display: block;
          }

          .meta .period {
              color: #dfe6e9;
              font-weight: 500;
              font-size: 0.85rem;
          }

          .card-body ul {
              list-style-type: none;
              padding: 0;
              margin: 0;
          }

          .card-body li {
              position: relative;
              padding-left: 15px;
              margin-bottom: 6px;
              color: #dfe6e9;
              line-height: 1.4;
              font-size: 0.9rem;
          }

          .card-body li::before {
              content: "▹";
              position: absolute;
              left: 0;
              color: #0984e3;
              font-size: 0.8rem;
              top: 2px;
          }

          @media (max-width: 992px) {
              .card-header {
                  flex-direction: column;
                  align-items: flex-start;
                  gap: 5px;
              }
              .meta {
                  text-align: left;
                  display: flex;
                  gap: 10px;
              }
          }
      `}</style>
            <style jsx global>{`
        #experience strong {
          font-weight: 500;
        }
        .card-body li strong {
            color: #81ecec;
            font-weight: 500;
        }
      `}</style>
        </>
    );
}
