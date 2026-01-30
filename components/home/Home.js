import ImagePreview from "../visual/AppPreview";
import { useState } from "react";
import { FaServer, FaCloud, FaChartLine, FaCode } from 'react-icons/fa';
import SectionHeading from "../SectionHeading";

export default function Home() {
    const [texts] = useState({
        title: "<strong>About Me</strong>",
        subtitle:
            "I’m Kaushal — an engineer building production-grade ML systems and end-to-end MLOps pipelines that are scalable, observable, and reproducible."
    });

    const aboutText = [
        "I’m a Cloud, DevOps, and AI Engineer who enjoys building systems that are reliable, scalable, and easy to operate. I work across infrastructure, automation, and software to turn complex ideas into production-ready solutions.",
        "I have experience designing CI/CD pipelines, cloud architectures, Kubernetes platforms, and AI-driven systems. I enjoy working where software meets infrastructure—making deployments faster, systems more stable, and teams more productive.",
        "I believe in continuous learning, clean engineering, and building things that actually solve real problems."
    ];

    const whatImDoing = [
        {
            title: "DevOps",
            icon: <FaServer />,
            description: "I build CI/CD pipelines, automate deployments, and improve delivery speed using tools like Jenkins, Docker, and Kubernetes—so teams can ship faster and safer."
        },
        {
            title: "Cloud Engineering",
            icon: <FaCloud />,
            description: "I design and maintain secure, scalable cloud infrastructure on AWS focusing on reliability, performance, and cost efficiency."
        },
        {
            title: "Software Development",
            icon: <FaCode />,
            description: "I build backend services, APIs, and full-stack applications using modern frameworks, focusing on clean architecture and maintainable code."
        }
    ];

    return (
        <>
            <div className="home-container" id="about-me">
                <div className="top-section">
                    <div className="text-column">
                        <SectionHeading title={texts.title} />
                        
                        <div className="bio-text">
                            {aboutText.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                    
                    <div className="visual-column">
                        {/* Background watermark effect for visual */}
                        <div className="visual-wrapper">
                            <ImagePreview/>
                        </div>
                    </div>
                </div>

                <div className="bottom-section">
                    <h2>What I'm Doing</h2>
                    <div className="doing-grid">
                        {whatImDoing.map((item, index) => (
                            <div className="doing-card" key={index}>
                                <div className="icon-wrapper">
                                    {item.icon}
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bottom-section">
                    <h2>Beyond Work</h2>
                    <div className="doing-grid">
                        <div className="doing-card" style={{ gridColumn: '1 / -1' }}>
                            <div className="icon-wrapper">
                                <FaChartLine />
                            </div>
                            <h3>Interests & Hobbies</h3>
                            <p>
                                When I’m not building systems, I enjoy staying active and competitive. I’m passionate about tennis, follow Formula 1 closely, and love PC gaming—especially games like Dota and Valorant. These interests keep me sharp, strategic, and always learning—both on and off the screen.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .home-container {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    gap: 30px;
                    padding-bottom: 20px;
                }

                .top-section {
                    display: flex;
                    gap: 40px;
                    align-items: flex-start;
                }

                .text-column {
                    flex: 2;
                }

                .visual-column {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                }

                .visual-wrapper {
                    width: 250px;
                    height: 250px;
                    opacity: 0.8;
                }

                .bio-text p {
                    font-family: Quicksand, sans-serif;
                    font-weight: 300;
                    font-size: 1rem;
                    line-height: 1.6;
                    color: #dfe6e9;
                    margin-bottom: 15px;
                    text-align: justify;
                }

                .bottom-section h2 {
                    font-family: Quicksand, sans-serif;
                    font-weight: 600;
                    font-size: 1.8rem;
                    color: white;
                    margin-bottom: 20px;
                }

                .doing-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 20px;
                }

                .doing-card {
                    background: #1e272e;
                    border: 1px solid #2d3436;
                    border-radius: 12px;
                    padding: 25px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    transition: transform 0.2s, border-color 0.2s;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                }

                .doing-card:hover {
                    transform: translateY(-3px);
                    border-color: #0984e3;
                    box-shadow: 0 8px 15px rgba(0,0,0,0.2);
                }

                .icon-wrapper {
                    font-size: 2rem;
                    color: #0984e3;
                    margin-bottom: 15px;
                }

                .doing-card h3 {
                    color: white;
                    font-family: Quicksand, sans-serif;
                    font-size: 1.2rem;
                    margin-bottom: 10px;
                }

                .doing-card p {
                    color: #b2bec3;
                    font-size: 0.95rem;
                    line-height: 1.5;
                }

                @media (max-width: 992px) {
                    .top-section {
                        flex-direction: column-reverse;
                        gap: 20px;
                    }

                    .visual-wrapper {
                        width: 150px;
                        height: 150px;
                    }
                    
                    .doing-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .bio-text p {
                        text-align: left;
                    }
                }
            `}</style>
            <style jsx global>{`
                #about-me strong {
                    font-weight: 500;
                }
            `}</style>
        </>
    );
}
