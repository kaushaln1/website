import React, { useState } from 'react';
import { FlaskOriginal } from 'devicons-react';
import { KubernetesOriginal } from 'devicons-react';
import { TerraformPlainWordmark } from 'devicons-react';
import { PostgresqlOriginalWordmark } from 'devicons-react';
import { JenkinsOriginal } from 'devicons-react';
import { SplunkOriginalWordmark } from 'devicons-react';
import { GrafanaOriginalWordmark } from 'devicons-react';
import { HelmOriginal } from 'devicons-react';
import { GoOriginal } from 'devicons-react';
import { ReactOriginal, GitOriginal, AmazonwebservicesOriginalWordmark, PythonOriginal, JavaOriginalWordmark, NodejsOriginalWordmark } from 'devicons-react';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// SkillCard Component
const SkillCard = ({ name, icon, color }) => {
    return (
        <div className="skill-card">
            <div style={{ color: color || 'inherit' }}>{icon}</div>
            <p>{name}</p>
        </div>
    );
};

// SkillsSection Component
const SkillsSection = () => {
    const [texts] = useState({
        title: `<strong>Resume and Skills,</strong> what I learned in my journey`,
        subtitle: `What tools I acquired in my journey`,
    });

    const skillsData = [
        { name: 'React', icon: <ReactOriginal size="100" /> },
        { name: 'Node.js', icon: <NodejsOriginalWordmark size="100" /> },
        { name: 'Python', icon: <PythonOriginal size="100" /> },
        { name: 'Go', icon: <GoOriginal size="100" /> },
        { name: 'Java', icon: <JavaOriginalWordmark size="100" /> },
        { name: 'AWS', icon: <AmazonwebservicesOriginalWordmark size="100" /> },
        { name: 'Git', icon: <GitOriginal size="100" /> },
        { name: 'Flask', icon: <FlaskOriginal size="100" /> },
        { name: 'Kubernetes', icon: <KubernetesOriginal size="100" /> },
        { name: 'Terraform', icon: <TerraformPlainWordmark size="100" /> },
        { name: 'SQL', icon: <PostgresqlOriginalWordmark size="100" /> },
        { name: 'Jenkins', icon: <JenkinsOriginal size="100" /> },
        { name: 'Splunk', icon: <SplunkOriginalWordmark size="100" /> },
        { name: 'Helm', icon: <HelmOriginal size="100" /> },
        { name: 'Grafana', icon: <GrafanaOriginalWordmark size="100" /> },
    ];

    return (
        <>
            <div className="skills-section" id="skills">
                <section>
                    <div className="content">
                        <h2 dangerouslySetInnerHTML={{ __html: texts.title }}></h2>
                        <p dangerouslySetInnerHTML={{ __html: texts.subtitle }}></p>
                    </div>
                </section>

                <div className="resume-download">
                    <a href="/resume.pdf" download>
                        <button className="download-button">
                            Download Resume <FontAwesomeIcon icon={faDownload} size={"2xs"} />
                        </button>
                    </a>
                </div>
                <div className="line-container">
                    <div className="line"></div>
                </div>
                <div className="skills-container">
                    {skillsData.map((skill) => (
                        <SkillCard key={skill.name} name={skill.name} icon={skill.icon} color={skill.color} />
                    ))}
                </div>
            </div>
            <style jsx>{`
                section {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    padding: 4vw 5.103vw 2vw 10.317vw;
                    background-color: #ffffff;
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

                section .accordion {
                    width: 100%;
                }

                section .content h2 {
                    font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
                    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
                    font-style: normal;
                    font-weight: 300;
                    font-size: 3.43391vw;
                    line-height: 122%;
                    color: #2d3436;
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
                    color: #2d3436;
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

                @media screen AND (max-width: 526px) {
                    section .content ul li img {
                        width: 6vw;
                        height: 4.5vw;
                    }
                }

                @media screen AND (min-width: 526px) AND (max-width: 992px) {
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

                @media screen AND (min-width: 993px) AND (max-width: 1199px) {
                    section .content .primary-button {
                        width: 13.5vw;
                    }
                }
            `}</style>
        </>
    );
};

export default SkillsSection;
