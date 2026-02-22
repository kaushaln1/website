import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import DOMPurify from "isomorphic-dompurify";

/**
 *
 * A simple accordion component used at FAQ page, created by using Material UI package.
 *
 * @param {Array} questions - Array of questions, data comes from strapi. questionTitle is the title, questionDescription is the description.
 *
 */

export default function SimpleAccordion() {
    const [questions] = useState({
        questions: [
            {
                questionTitle: "Linvest21, AI Engineer  | Remote, September 2024 – Present",
                questionDescription: `
                <ul style="list-style-type: disc; padding-left: 20px; margin: 0;">
                    <li style="margin-bottom: 8px;">Engineered a scalable data ingestion pipeline using <strong>Apache Airflow</strong> and <strong>AWS Lambda</strong>, reducing data processing latency by <strong>40%</strong>.</li>
                    <li style="margin-bottom: 8px;">Developed a RAG-based AI chatbot using <strong>LangChain</strong> and <strong>LangGraph</strong>, serving financial insights with <strong>&lt;2s response time</strong>.</li>
                    <li style="margin-bottom: 8px;">Designed the "Investor Intelligence" system, integrating real-time market data APIs and reducing financial analysis time for clients by <strong>60%</strong>.</li>
                    <li style="margin-bottom: 8px;">Optimized cloud infrastructure on AWS, achieving <strong>99.9% uptime</strong> for AI services and ensuring scalable deployment.</li>
                </ul>`,
            },
            {
                questionTitle: "HSBC Software Development India, Senior Software Developer | Pune, Maharashtra July 2019 – July 2023",
                questionDescription: `
                <ul style="list-style-type: disc; padding-left: 20px; margin: 0;">
                    <li style="margin-bottom: 8px;">Architected and deployed microservices on <strong>Kubernetes</strong>, serving <strong>1M+ daily transactions</strong> with 99.99% availability.</li>
                    <li style="margin-bottom: 8px;">Reduced deployment time by <strong>75%</strong> by designing modular <strong>Jenkins CI/CD pipelines</strong> with automated testing and security scans (SonarQube, Trivy).</li>
                    <li style="margin-bottom: 8px;">Optimized database performance for AWS Aurora, reducing query latency by <strong>30%</strong> via query tuning and connection pooling.</li>
                    <li style="margin-bottom: 8px;">Implemented comprehensive monitoring using <strong>Splunk</strong> and <strong>AppDynamics</strong>, reducing Mean Time To Resolution (MTTR) by <strong>50%</strong>.</li>
                </ul>`,
            },
            {
                questionTitle: "Defense Research and Development Organization (DRDO), Intern | Pune, Maharashtra May 2018 - July 2018",
                questionDescription: `
                <ul style="list-style-type: disc; padding-left: 20px; margin: 0;">
                    <li style="margin-bottom: 8px;">Built a secure local repository server for sensitive defense systems, reducing update bandwidth usage by <strong>90%</strong>.</li>
                    <li style="margin-bottom: 8px;">Automated patch management using <strong>Shell scripts</strong> and <strong>Cron jobs</strong>, ensuring 100% compliance across 50+ isolated servers.</li>
                    <li style="margin-bottom: 8px;">Reduced system update time by <strong>40%</strong> through localized package mirroring and optimized network protocols.</li>
                </ul>`,
            },
        ],
    });

    return (
        <>
            <div className="accordion-style">
                {questions.questions.map((item, index) => (
                    <Accordion
                        key={index}
                        elevation={0}
                        sx={{
                            backgroundColor: "#2b2d30",
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            borderRadius: "8px",
                            marginBottom: "10px",
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "#ffffff" }} />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                        >
                            <Typography
                                sx={{
                                    color: "#ffffff",
                                    fontSize: "18px",
                                    fontWeight: "500",
                                    lineHeight: "24px",
                                    fontFamily: "Quicksand",
                                }}
                            >
                                {item.questionTitle}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography
                                sx={{
                                    color: "#ffffff",
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                    fontFamily: "Quicksand",
                                }}
                                component="div"
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(item.questionDescription, {
                                        ALLOWED_ATTR: ["style"],
                                    }),
                                }}
                            />
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
            <style jsx>
                {`
          .accordion-style {
            padding-top: 5vw;
          }
        `}
            </style>
        </>
    );
}
