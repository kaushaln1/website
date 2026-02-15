import { useState } from "react";
import Head from "next/head";

export default function Home() {
    const whatImDoing = [
        {
            title: "DevOps Engineering",
            icon: "⚙️",
            description: "I design CI/CD pipelines that ship software faster and safer — using Jenkins, Docker, and Kubernetes to automate deployments that previously took days down to minutes. At HSBC, this cut release cycles by 75%.",
        },
        {
            title: "Cloud Architecture",
            icon: "☁️",
            description: "I build and migrate cloud infrastructure on AWS — from Aurora DB connectivity patterns to full platform migrations from PCF to AWS. My focus is security, cost efficiency, and long-term scalability.",
        },
        {
            title: "AI Engineering",
            icon: "🤖",
            description: "I develop production AI systems — from RAG pipelines and LLM-powered financial assistants to real-time voice chatbots using LangGraph and LangChain. I build AI that integrates cleanly with existing infrastructure.",
        },
        {
            title: "Backend Development",
            icon: "</>",
            description: "I write robust backend services and APIs in Java Spring Boot, FastAPI, and Node.js — with an emphasis on clean architecture, testability, and microservices that are easy for teams to maintain and extend.",
        },
    ];

    const tags = ["🎾 Tennis", "🏎 Formula 1", "🎮 Dota 2", "🎯 Valorant", "📐 Systems Thinking"];

    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className="home-container" id="about-me">
                {/* About header */}
                <section className="about-header">
                    <div className="about-text">
                        <h1>About Me</h1>
                        <div className="accent-line" />
                        <p>
                            I'm a <strong>Cloud, DevOps, and AI Engineer</strong> with 4 years of industry experience building systems that are fast, resilient, and genuinely useful. My work spans infrastructure automation, microservices architecture, and AI-driven applications — turning complex engineering problems into clean, production-ready solutions.
                        </p>
                        <p>
                            At HSBC, I cut deployment time by <strong>75%</strong> through CI/CD automation and led a cloud migration that saved <strong>$1.3M</strong> in infrastructure costs. Today, at Linvest21, I'm building AI systems — including real-time voice chatbots and LLM-powered investment intelligence platforms — that make financial data more accessible and actionable.
                        </p>
                        <p>
                            I hold a <strong>Master's in Computer Science</strong> from Binghamton University and am certified in both AWS and Terraform. I believe the best engineering is invisible — systems that just work, at scale, without drama.
                        </p>
                        <div className="certs-strip">
                            <span className="cert-badge">☁ AWS Certified Developer</span>
                            <span className="cert-badge">⬡ HashiCorp Terraform Associate</span>
                            <span className="cert-badge">🎓 M.S. Computer Science – SUNY Binghamton</span>
                        </div>
                    </div>
                    <div className="avatar-wrap">
                        <img src="/homeImage.png" alt="Kaushal Nerkar" />
                    </div>
                </section>

                {/* Quick stats */}
                <div className="stats-row">
                    <div className="stat">
                        <span className="stat-value">4+</span>
                        <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat">
                        <span className="stat-value">75%</span>
                        <span className="stat-label">Deployment Time Reduced</span>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat">
                        <span className="stat-value">$1.3M</span>
                        <span className="stat-label">Infrastructure Savings</span>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat">
                        <span className="stat-value">2</span>
                        <span className="stat-label">Cloud Certifications</span>
                    </div>
                </div>

                {/* What I'm Doing */}
                <section>
                    <h2 className="section-heading">What I'm Doing</h2>
                    <div className="cards-grid">
                        {whatImDoing.map((item, index) => (
                            <div className="card" key={index}>
                                <span className="card-icon">{item.icon}</span>
                                <div className="card-title">{item.title}</div>
                                <p className="card-desc">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Beyond Work */}
                <section className="beyond-section">
                    <h2 className="section-heading">Beyond Work</h2>
                    <div className="beyond-card">
                        <span className="card-icon">🎯</span>
                        <div className="card-title">Interests & Hobbies</div>
                        <p className="card-desc beyond-desc">
                            Off the keyboard, I'm competitive in everything I do. I play tennis regularly, follow Formula 1 with the intensity of a strategist (the pit stops matter), and log serious hours in Dota 2 and Valorant — games that reward the same systems thinking I bring to engineering. Sport and strategy keep me sharp.
                        </p>
                        <div className="tags">
                            {tags.map((tag, i) => (
                                <span className="tag" key={i}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <style jsx>{`
                .home-container {
                    --bg-base: #1e2025;
                    --bg-card: #252830;
                    --bg-card-hover: #2c3040;
                    --accent: #4f9eff;
                    --accent-dim: rgba(79, 158, 255, 0.12);
                    --text-primary: #e8eaf0;
                    --text-secondary: #9aa3b8;
                    --text-muted: #5c6478;
                    --border: rgba(79, 158, 255, 0.15);
                    --border-subtle: rgba(255, 255, 255, 0.06);

                    font-family: "Sora", sans-serif;
                    color: var(--text-primary);
                    padding-bottom: 52px;
                }

                .about-header {
                    display: grid;
                    grid-template-columns: 1fr auto;
                    gap: 32px;
                    align-items: start;
                    margin-bottom: 52px;
                }

                .about-text h1 {
                    font-size: 2.1rem;
                    font-weight: 700;
                    letter-spacing: -0.02em;
                    margin-bottom: 10px;
                    color: var(--text-primary);
                }

                .accent-line {
                    width: 40px;
                    height: 3px;
                    background: var(--accent);
                    border-radius: 2px;
                    margin-bottom: 28px;
                }

                .about-text p {
                    font-size: 1.02rem;
                    color: var(--text-secondary);
                    margin-bottom: 18px;
                    font-weight: 300;
                    line-height: 1.75;
                }

                .about-text p strong {
                    color: var(--text-primary);
                    font-weight: 500;
                }

                .avatar-wrap {
                    width: 140px;
                    height: 140px;
                    min-width: 140px;
                    min-height: 140px;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 2px solid var(--border);
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .avatar-wrap img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center 15%;
                    // gap: 30px;
                    // padding-bottom: 2px;
                }

                .certs-strip {
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                    margin-top: 24px;
                }

                .cert-badge {
                    background: var(--accent-dim);
                    border: 1px solid rgba(79, 158, 255, 0.25);
                    border-radius: 8px;
                    padding: 6px 14px;
                    font-size: 0.75rem;
                    color: var(--accent);
                    font-family: "JetBrains Mono", monospace;
                }

                .stats-row {
                    display: flex;
                    gap: 32px;
                    margin-bottom: 52px;
                    padding: 24px 28px;
                    background: var(--bg-card);
                    border: 1px solid var(--border-subtle);
                    border-radius: 12px;
                }

                .stat {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .stat-value {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--accent);
                    font-family: "JetBrains Mono", monospace;
                    letter-spacing: -0.02em;
                }

                .stat-label {
                    font-size: 0.75rem;
                    color: var(--text-muted);
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    font-weight: 500;
                }

                .stat-divider {
                    width: 1px;
                    background: var(--border-subtle);
                    align-self: stretch;
                }

                .section-heading {
                    font-size: 1.35rem;
                    font-weight: 700;
                    letter-spacing: -0.01em;
                    margin-bottom: 24px;
                    color: var(--text-primary);
                }

                .cards-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 16px;
                }

                .card {
                    background: var(--bg-card);
                    border: 1px solid var(--border-subtle);
                    border-radius: 12px;
                    padding: 28px 24px;
                    text-align: center;
                    transition: border-color 0.2s, background 0.2s;
                }

                .card:hover {
                    border-color: var(--border);
                    background: var(--bg-card-hover);
                }

                .card-icon {
                    font-size: 1.6rem;
                    margin-bottom: 14px;
                    display: block;
                }

                .card-title {
                    font-size: 1rem;
                    font-weight: 600;
                    color: var(--text-primary);
                    margin-bottom: 10px;
                }

                .card-desc {
                    font-size: 0.92rem;
                    color: var(--text-secondary);
                    line-height: 1.65;
                    font-weight: 300;
                }

                .beyond-section {
                    margin-top: 48px;
                }

                .beyond-card {
                    background: var(--bg-card);
                    border: 1px solid var(--border-subtle);
                    border-radius: 12px;
                    padding: 28px 24px;
                    text-align: center;
                }

                .beyond-desc {
                    max-width: 560px;
                    margin: 0 auto 0 auto;
                }

                .tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    justify-content: center;
                    margin-top: 16px;
                }

                .tag {
                    background: var(--accent-dim);
                    color: var(--accent);
                    font-size: 0.73rem;
                    font-weight: 500;
                    padding: 4px 12px;
                    border-radius: 100px;
                    border: 1px solid rgba(79, 158, 255, 0.2);
                    font-family: "JetBrains Mono", monospace;
                    letter-spacing: 0.02em;
                }

                @media (max-width: 992px) {
                    .about-header {
                        grid-template-columns: 1fr;
                    }

.avatar-wrap {
                    justify-self: end;
                    width: 120px;
                    height: 120px;
                    min-width: 120px;
                    min-height: 120px;
                    }

                    .stats-row {
                        flex-wrap: wrap;
                        gap: 20px;
                    }

                    .stat-divider {
                        display: none;
                    }

                    .cards-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </>
    );
}
