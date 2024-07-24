import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

/**
 * WorkDesktop component displays a portfolio of projects in a desktop view.
 * It uses GSAP and ScrollTrigger for animations and interactions.
 *
 * @param {String} title - Title of the component.
 * @param {String} subtitle - Subtitle of the component.
 * @param {String} itemTitle - Title of the item.
 * @param {String} itemSubtitle - Subtitle of the item.
 * @param {String} itemLink - A link for the item.
 */
export default function WorkDesktop() {
    const [texts] = useState({
        title: "<strong>Projects</strong> my previous works.",
        subtitle: "Here are the projects that I have worked on before.",
    });
    const [expanded, setExpanded] = useState(null);

    const projects = [
        {
            title: "KubeControl App",
            description:
                "Created a containerized application deployment platform using EKS (Amazon Elastic Kubernetes Service) and Kubernetes to host a variety of applications. Programmed an application using React.js for frontend development and Flask as backend server to call Kubernetes APIs. Increased management of deployed apps via a user-friendly UI, reduced deployment time, and provided a scalable, easy-to-manage platform.",
            link: null,
            image: null,
        },
        {
            title: "A2CW (Automated API Compliance Watch)",
            description:
                "Owned development of the CI/CD pipeline, enabling continuous application deployment on Kubernetes and designing the Cloud Connectivity Pattern for seamless AWS Aurora DB integration. Led the configuration of AppDynamics, Splunk, and DataDog for comprehensive application performance monitoring and troubleshooting. Contributed to the design and development of features within A2CW's Self-Compliance Tool, optimizing batch jobs for bulk data processing.",
            link: null,
            image: null,
        },
        {
            title: "Samba Sheep API Migration Tool",
            description:
                "Designed, implemented, and deployed a one-click Node.js solution to migrate HSBC APIs from Pivotal Cloud (PCF) to AWS Cloud. Streamlined the migration of APIs with easy to use utility which saved approximately 1.3 million for the bank. Encouraged a collaborative environment by inner-sourcing utility for wider adoption across HSBC groups.",
            link: null,
            image: null,
        },
    ];

    const handleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <div className="container" id="portfolio">
            <section id="section3">
                <div className="content">
                    <h2 dangerouslySetInnerHTML={{ __html: texts.title }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: texts.subtitle }}></p>
                </div>
            </section>
            <div className="projects">
                {projects.map((project, index) => (
                    <div className="project-tile" key={index}>
                        <h2>{project.title}</h2>
                        {project.image && <img src={project.image} alt={project.title} />}
                        <button onClick={() => handleExpand(index)}>
                            {expanded === index ? "Collapse" : "Expand"}
                        </button>
                        {expanded === index && (
                            <div className="project-details">
                                <p>{project.description}</p>
                                {project.link && (
                                    <div className="box">
                                        <a href={project.link}>
                                            <button>
                                                <span>Visit</span>
                                            </button>
                                        </a>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <style jsx>{`
        .container {
          padding: 20px;
          background: #2d3436;
        }

        section {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 4vw 5.103vw 2vw 10.317vw;
        }

        section .media {
          width: 49vw;
          position: absolute;
          right: 0;
          top: 0;
        }

        section .content {
          display: flex;
          flex-direction: column;
        }

        section .content h2 {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 3.43391vw;
          line-height: 122%;
          color: #ffffff;
          margin-bottom: 2.513vw;
          animation-delay: 0s;
        }

        section .content p {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 1.5873vw;
          line-height: 140%;
          color: #ffffff;
          margin-bottom: 2.513vw;
          animation-delay: 0.3s;
        }

        section .content .primary-button {
          width: 11.78407vw;
          animation-delay: 0.6s;
        }

        section .content .primary-button.mobile {
          display: none;
          animation-delay: 1.8s;
        }

        section .content ul {
          display: flex;
          flex-direction: row;
          margin-top: 5.621vw;
        }

        section .content ul li {
          display: flex;
          flex-direction: column;
          width: 19.31216vw;
          margin-right: 3.83597vw;
        }

        section .content ul li:nth-child(1) {
          animation-delay: 0.9s;
        }

        section .content ul li:nth-child(2) {
          animation-delay: 1.2s;
        }

        section .content ul li:nth-child(3) {
          animation-delay: 1.5s;
        }

        section .content ul li:last-child {
          margin-right: 0;
        }

        section .content ul li img {
          width: 1.917vw;
          height: 1.322vw;
          margin-bottom: 1.851vw;
        }

        section .content ul span {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 1.32275vw;
          line-height: 130%;
          color: #a0a0aa;
        }

        @media screen and (max-width: 992px) {
          section {
            padding: 35px 22px;
          }

          section > .media {
            display: none;
          }

          section .content {
            width: 100%;
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

          section .content > .primary-button {
            display: none;
          }

          section .content > .primary-button.mobile {
            display: flex;
            width: 100%;
            justify-content: center;
            margin-top: 13px;
            height: 45px;
            font-size: min(5vw, 24px);
          }

          section .content > ul {
            flex-direction: column;
            margin-top: 0;
          }

          section .content > ul li {
            width: 100%;
            margin-right: 0;
            flex-direction: row-reverse;
            justify-content: space-between;
            padding: 17px 0 28px 0;
            border-top: 1px solid #eeeef2;
          }

          section .content > ul li span {
            font-size: 15px;
            line-height: 20px;
            width: 70%;
          }
        }

        @media screen and (max-width: 526px) {
          section .content ul li img {
            width: 6vw;
            height: 4.5vw;
          }
        }

        @media screen and (min-width: 526px) and (max-width: 992px) {
          section .content h2 {
            font-size: 35px;
          }

          section .content p {
            font-size: 20px;
            line-height: 30px;
          }

          section .content > ul li span {
            font-size: 20px;
            line-height: 30px;
          }

          section .content ul li img {
            width: 4vw;
            height: 3.5vw;
          }
        }

        @media screen and (min-width: 993px) and (max-width: 1199px) {
          section .content .primary-button {
            width: 13.5vw;
          }
        }

        .projects {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }

        .project-tile {
          background: #799d9d;
          border-radius: 8px;
          padding: 20px;
          margin: 10px;
          width: 300px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .project-tile h2 {
          font-size: 1.5em;
          margin-bottom: 10px;
        }

        .project-tile img {
          width: 100%;
          height: auto;
          margin-bottom: 10px;
        }

        .project-tile button {
          background: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 10px 20px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .project-tile button:hover {
          background: #005bb5;
        }

        .project-details {
          margin-top: 10px;
        }

        .project-details p {
          margin-bottom: 10px;
        }

        .box {
          margin-top: 10px;
        }

        .box button {
          background: #28a92b;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 10px 20px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .box button:hover {
          background: #218c19;
        }

        .scroll-down {
          position: relative;
          top: 20px;
          color: black;
          font-weight: 400;
          text-transform: uppercase;
          font-size: 16px;
          overflow: visible;
        }

        .scroll-down .arrow {
          position: relative;
          top: -4px;
          margin: 0 auto;
          width: 20px;
          height: 20px;
          background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj4KPHBhdGggZmlsbD0iYmxhY2siIGQ9Ik00ODMuMiwxOTIuMmMtMjAuNS0yMC41LTUzLjUtMjAuOC03My43LTAuNkwyNTcsMzQ0LjFMMTA0LjUsMTkxLjZjLTIwLjItMjAuMi01My4yLTE5LjgtNzMuNywwYy0yMC41LDIwLjUtMjAuOCw1My41LTAuNiw3My43bDk3LjUsOTcuNWMyLjIsMi4yLDUuMiwzLjMsOC4xLDMuM2MyLjksMCw1LjktMS4xLDguMS0zLjNsOTcuNS05Ny41QzUwNCwzNDUuNiw1MDMuNywyMTIuOCw0ODMuMiwxOTIuMnoiLz4KPC9zdmc+Cg==);
          background-size: contain;
          background-repeat: no-repeat;
          animation: bounce 1s infinite alternate;
        }

        @keyframes bounce {
          to {
            transform: translateY(5px);
          }
        }
      `}</style>
        </div>
    );
}
