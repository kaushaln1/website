import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

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
                questionTitle: "HSBC Software Development India, Senior Software Developer | Pune, Maharashtra July 2019 – July 2023",
                questionDescription: `● Designed, developed, and maintained Java SpringBoot applications to support debit history retrieval and balance management.<br>
          ● Orchestrated scalable, highly available, and fault-tolerant containerized deployments with Kubernetes.<br>
          ● Implemented Jenkins pipelines to automate continuous integration and continuous deployment (CI/CD) for applications which brought down deployment time by 75%.<br>
          ● Optimized application responsiveness by using Splunk and AppDynamics to track and troubleshoot performance issues within AWS databases.`,
            },
            {
                questionTitle: "Defense Research and Development Organization, Intern | Pune, Maharashtra May 2018 - July 2018",
                questionDescription: `● Developed a local server to aggregate and distribute updates from archive servers to multiple clients.<br>
          ● Leveraged Xen virtualization on HP servers and scripted cron jobs & shell scripts for efficient update mirroring and package management.<br>
          ● Improved system security with an internal update approach, which streamlines blacklisting of malicious packages.<br>
          ● Reduced internal Linux System’s update time by an estimated 40% through a local Ubuntu repository.`,
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
                                    fontFamily: "Visby",
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
                                    fontFamily: "Visby",
                                }}
                                dangerouslySetInnerHTML={{ __html: item.questionDescription }}
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
