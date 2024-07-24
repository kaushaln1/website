import React, { useState } from "react";

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
                backgroundColor: "#FFF1D5",
                type: "React App",
                title: "<strong>KubeControl App</strong>",
                subtitle:
                    "Created a containerized application deployment platform using EKS (Amazon Elastic Kubernetes Service) and Kubernetes to host a variety of applications. Programmed an application using React.js for frontend development and Flask as backend server to call Kubernetes APIs. Increased management of deployed apps via a user-friendly UI, reduced deployment time, and provided a scalable, easy-to-manage platform.",
                techs: "React.js Flask Kubernetes EKS",
                links: {
                    github: "https://github.com/kaushaln1/KubeControl/tree/master",
                    website: "",
                },
            },
            {
                backgroundColor: "#FFE2E2",
                type: "Team Project",
                title: "<strong>Platform setup</strong>",
                subtitle:
                    "Owned development of the CI/CD pipeline, enabling continuous application deployment on Kubernetes and designing the Cloud Connectivity Pattern for seamless AWS Aurora DB integration. Led the configuration of AppDynamics, Splunk, and DataDog for comprehensive application performance monitoring and troubleshooting. Contributed to the design and development of features within A2CW's Self-Compliance Tool, optimizing batch jobs for bulk data processing.",
                techs: "Kubernetes AWS Aurora AppDynamics Splunk DataDog",
                links: {
                    github: "",
                    website: "",
                },
            },
            {
                backgroundColor: "#D5E5FF",
                type: "Team Project",
                title: "<strong>Samba Sheep API Migration Tool</strong>",
                subtitle:
                    "Designed, implemented, and deployed a one-click Node.js solution to migrate HSBC APIs from Pivotal Cloud (PCF) to AWS Cloud. Streamlined the migration of APIs with easy to use utility which saved approximately 1.3 million for the bank. Encouraged a collaborative environment by inner-sourcing utility for wider adoption across HSBC groups.",
                techs: "Node.js AWS PCF",
                links: {
                    github: "",
                    website: "",
                },
            },
        ],
    });

    return (
        <>
            <div className="column">
                {texts.projects.map((item, i) => (
                    <div
                        className="item"
                        key={i}
                        style={{ backgroundColor: item.backgroundColor }}
                    >
                        <h1
                            dangerouslySetInnerHTML={{ __html: item.type }}
                        ></h1>
                        <h2
                            dangerouslySetInnerHTML={{ __html: item.title }}
                        ></h2>
                        <p
                            dangerouslySetInnerHTML={{ __html: item.subtitle }}
                        ></p>
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
            </div>
            <style jsx>{`
        .column {
          display: flex;
          flex-direction: column;
          margin-top: 16px;
        }

        h1 {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 20px;
          margin-bottom: 5px;
        }

        h2 {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 20px;
          margin-bottom: 25px;
        }

        p {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
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
