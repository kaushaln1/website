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
        { name: 'React', icon: <ReactOriginal size="80" /> },
        { name: 'Node.js', icon: <NodejsOriginalWordmark size="80" color="#fff" /> },
        { name: 'Python', icon: <PythonOriginal size="80" /> },
        { name: 'Go', icon: <GoOriginal size="80" /> },
        { name: 'Java', icon: <JavaOriginalWordmark size="80" /> },
        { name: 'AWS', icon: <AmazonwebservicesOriginalWordmark size="80" /> },
        { name: 'Git', icon: <GitOriginal size="80" /> },
        { name: 'Flask', icon: <FlaskOriginal size="80" color="#fff" /> },
        { name: 'Kubernetes', icon: <KubernetesOriginal size="80" /> },
        { name: 'Terraform', icon: <TerraformPlainWordmark size="80" color="#fff" /> },
        { name: 'SQL', icon: <PostgresqlOriginalWordmark size="80" /> },
        { name: 'Jenkins', icon: <JenkinsOriginal size="80" /> },
        { name: 'Splunk', icon: <SplunkOriginalWordmark size="80" /> },
        { name: 'Helm', icon: <HelmOriginal size="80" /> },
        { name: 'Grafana', icon: <GrafanaOriginalWordmark size="80" /> },
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
                    <a href="/Kaushal_resume.pdf"  download>
                        <button className="download-button">
                            Download Resume <FontAwesomeIcon icon={faDownload} size={"lg"} className="icon" />
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
                    background-color: #2d3436;
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
                    animation-delay: 0s;
                }

                section .content p {
                    font-family: Quicksand, -apple-system, BlinkMacSystemFont, "Segoe UI",
                    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
                    font-style: normal;
                    font-weight: 300;
                    font-size: 1.5873vw;
                    line-height: 140%;
                    color: #dfe6e9;
                    margin-bottom: 2.513vw;
                    animation-delay: 0.3s;
                }

                .skills-section {
                    position: relative;
                    padding-bottom: 5vw;
                    background-color: #2d3436;
                }

                .resume-download {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 2vw;
                    width: 100%;
                }

                .download-button {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    padding: 12px 35px;
                    font-size: 1.1rem;
                    background-color: transparent;
                    color: #0984e3;
                    border: 1px solid #0984e3;
                    border-radius: 50px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-family: Quicksand, sans-serif;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .download-button:hover {
                    background-color: #0984e3;
                    color: white;
                    box-shadow: 0 0 15px rgba(9, 132, 227, 0.4);
                }

                .line-container {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 4vw;
                }

                .line {
                    width: 80%;
                    height: 1px;
                    background-color: #636e72;
                    opacity: 0.3;
                }

                .skills-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 20px;
                    padding: 0 5vw;
                }

                :global(.skill-card) {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 140px;
                    height: 140px;
                    background: #1e272e;
                    border-radius: 12px;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
                    border: 1px solid #2d3436;
                    transition: transform 0.2s;
                }

                :global(.skill-card:hover) {
                    transform: translateY(-5px);
                    border-color: #0984e3;
                }

                :global(.skill-card p) {
                    margin-top: 15px;
                    font-family: Quicksand, sans-serif;
                    font-size: 1rem;
                    color: #dfe6e9;
                    text-align: center;
                    font-weight: 500;
                }

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
                    
                    .skills-container {
                        gap: 15px;
                    }
                    
                    :global(.skill-card) {
                        width: 110px;
                        height: 110px;
                    }
                }
            `}</style>
            <style jsx global>{`
                #skills strong {
                    font-weight: 500;
                }
            `}</style>
        </>
    );
};

export default SkillsSection;
