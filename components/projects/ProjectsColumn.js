import React, { useState } from "react";
import DOMPurify from "isomorphic-dompurify";

/**
 * Projects Column from the Work section. Only for mobile
 *
 * @param {Array} projects - All the projects person has done. It has 6 attributes: backgroundColor for background color of the bubble. Type for type of the projects. Title and subtitle of the project. Techs the technologies projects has used. Links is a json with 2 attributes github and website.
 *
 */
function ProjectsColumn() {
    const [texts] = useState({
        projects: [
            {
                backgroundColor: "#D5E5FF",
                type: "ML & Policy",
                title: "<strong>Economic Inequality Early Warning System</strong>",
                subtitle:
                    "Real-time Kafka streaming, ML forecasting, causal inference, and GenAI to predict and explain inequality risk for policy and impact.",
                techs: "Kafka XGBoost DoWhy GenAI FastAPI MLflow",
                links: {
                    github: "",
                    website: "",
                },
            },
            {
                backgroundColor: "#FFF1D5",
                type: "AI & RAG",
                title: "<strong>Terraform Code Generator with AI</strong>",
                subtitle:
                    "AI-powered Terraform code generator using Retrieval-Augmented Generation (RAG) and LLMs, automating Infrastructure-as-Code creation.",
                techs: "AI LLM Terraform RAG Streamlit",
                links: {
                    github: "",
                    website: "",
                },
            },
            {
                backgroundColor: "#D5E5FF",
                type: "ChatOps",
                title: "<strong>Slack App Access Manager</strong>",
                subtitle:
                    "Node.js app for managing production access requests directly within Slack. Streamlined access logs and compliance.",
                techs: "Node.js SlackAPI AWS Lambda",
                links: {
                    github: "https://github.com/kaushaln1/slackApp",
                    website: "",
                },
            },
            {
                backgroundColor: "#FFE2E2",
                type: "K8s Platform",
                title: "<strong>KubeControl App</strong>",
                subtitle:
                    "Containerized application deployment platform using EKS. Simplified management via React UI and Flask backend.",
                techs: "React.js Flask Kubernetes EKS",
                links: {
                    github: "https://github.com/kaushaln1/KubeControl/tree/master",
                    website: "",
                },
            },
            {
                backgroundColor: "#FFF1D5",
                type: "MLOps Platform",
                title: "<strong>End-to-End MLOps Platform</strong>",
                subtitle:
                    "From Zero to Production: A Kubernetes-Native MLOps System. Automated retraining and deployment.",
                techs: "Kubernetes Feast MLflow FastAPI Prometheus",
                links: {
                    github: "https://github.com/kaushaln1/Financial-Risk-Prediction/tree/feature_v1_1",
                    website: "",
                },
            },
            {
                backgroundColor: "#FFF1D5",
                type: "CI/CD",
                title: "<strong>End to End Deployment Pipeline</strong>",
                subtitle:
                    "Automated Jenkins pipeline for building, testing, and deploying Spring Boot apps to Kubernetes with security gates.",
                techs: "Jenkins Docker Helm Kubernetes SonarQube",
                links: {
                    github: "https://github.com/kaushaln1/End_to_End_pipeline_scripts",
                    website: "",
                },
            },
            {
                backgroundColor: "#FFE2E2",
                type: "API Gateway",
                title: "<strong>Kong Gateway with k8s</strong>",
                subtitle:
                    "Kong API Gateway deployment on Kubernetes with Helm and DB-less configuration for GitOps.",
                techs: "Kong Kubernetes Helm Lua",
                links: {
                    github: "https://github.com/kaushaln1/KongGateway_k8s",
                    website: "",
                },
            },
            {
                backgroundColor: "#D5E5FF",
                type: "Cloud Compliance",
                title: "<strong>A2CW Compliance Watch</strong>",
                subtitle:
                    "Compliance and monitoring pipeline for cloud applications with AWS Aurora integration and Splunk monitoring.",
                techs: "Kubernetes AWS AppDynamics Splunk",
                links: {
                    github: "",
                    website: "",
                },
            },
            {
                backgroundColor: "#FFF1D5",
                type: "Cloud Migration",
                title: "<strong>Samba Sheep API Migration Tool</strong>",
                subtitle:
                    "Node.js solution to migrate APIs from PCF to AWS, saving ~$1.3M. Streamlined API transition process.",
                techs: "Node.js AWS PCF",
                links: {
                    github: "",
                    website: "",
                },
            },
        ],
    });

    const mainProjects = texts.projects.slice(0, 4);
    const moreProjects = texts.projects.slice(4);

    const sanitize = (html) => DOMPurify.sanitize(html);

    return (
        <>
            <div className="column">
                {mainProjects.map((item, i) => (
                    <div
                        className="item"
                        key={i}
                        style={{ backgroundColor: item.backgroundColor }}
                    >
                        <h1 dangerouslySetInnerHTML={{ __html: sanitize(item.type) }}></h1>
                        <h2 dangerouslySetInnerHTML={{ __html: sanitize(item.title) }}></h2>
                        <p dangerouslySetInnerHTML={{ __html: sanitize(item.subtitle) }}></p>
                        <span>{item.techs}</span>
                        <div className="row-of-logos">
                            {item.links.github && (
                                <a href={item.links.github} target="_blank" rel="noopener noreferrer">
                                    <img src="/logos/github-mark.png" alt="GitHub" />
                                </a>
                            )}
                            {item.links.website && (
                                <a href={item.links.website} target="_blank" rel="noopener noreferrer">
                                    <img src="/logos/website.png" alt="Website" />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
                {moreProjects.length > 0 && (
                    <>
                        <h3 className="more-heading">More Projects</h3>
                        {moreProjects.map((item, i) => (
                            <div
                                className="item"
                                key={i + 4}
                                style={{ backgroundColor: item.backgroundColor }}
                            >
                                <h1 dangerouslySetInnerHTML={{ __html: sanitize(item.type) }}></h1>
                                <h2 dangerouslySetInnerHTML={{ __html: sanitize(item.title) }}></h2>
                                <p dangerouslySetInnerHTML={{ __html: sanitize(item.subtitle) }}></p>
                                <span>{item.techs}</span>
                                <div className="row-of-logos">
                                    {item.links.github && (
                                        <a href={item.links.github} target="_blank" rel="noopener noreferrer">
                                            <img src="/logos/github-mark.png" alt="GitHub" />
                                        </a>
                                    )}
                                    {item.links.website && (
                                        <a href={item.links.website} target="_blank" rel="noopener noreferrer">
                                            <img src="/logos/website.png" alt="Website" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
            <style jsx>{`
        .column {
          display: flex;
          flex-direction: column;
          margin-top: 16px;
        }

        .more-heading {
          font-family: Quicksand, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #2d3436;
          margin: 30px 0 15px 0;
          padding-bottom: 8px;
          border-bottom: 1px solid #dfe6e9;
        }

        h1 {
          font-family: Quicksand, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 20px;
          margin-bottom: 5px;
        }

        h2 {
          font-family: Quicksand, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 20px;
          margin-bottom: 25px;
        }

        p {
          font-family: Quicksand, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 15px;
          line-height: 20px;
          color: #61616a;
          margin-bottom: 25px;
        }

        .item {
          display: flex;
          flex-direction: column;
          padding: 4vw;
          border-radius: 2vw;
          margin-bottom: 25px;
          background-color: #fff; /* Default background color */
        }

        .item .row-of-logos {
          display: flex;
          flex-direction: row;
          margin-top: 25px;
        }

        .item .row-of-logos img {
          width: 40px;
          height: 25px;
          object-fit: contain;
          margin-right: 10px; /* Added margin for spacing */
        }

        @media screen and (max-width: 600px) {
          .item {
            padding: 20px;
          }

          .item .row-of-logos img {
            width: 30px;
            height: 20px;
          }
        }
      `}</style>
        </>
    );
}

export default ProjectsColumn;
