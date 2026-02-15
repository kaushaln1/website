import { useRef } from "react";
import Head from "next/head";

const LinvestBullets = () => (
  <div className="bullet-list-wrap">
    <ul className="bullets">
      <li>
        <span className="bullet-marker" aria-hidden>►</span>
        <span className="bullet-text">Built a real-time voice AI chatbot for investment insights using <span className="hi-green">LangGraph</span> and <span className="hi-green">LangChain</span> — users can ask questions in natural language or speech and get answers in <span className="hi">&lt;2s</span>, replacing slow dashboard hunting.</span>
      </li>
      <li>
        <span className="bullet-marker" aria-hidden>►</span>
        <span className="bullet-text">Engineered the <span className="hi-green">Investor Intelligence</span> system — integrating live market trends, stock data, and client portfolio context to surface personalized financial decisions, not just raw data.</span>
      </li>
      <li>
        <span className="bullet-marker" aria-hidden>►</span>
        <span className="bullet-text">Designed a financial data ingestion pipeline with <span className="hi-green">Apache Airflow</span> + <span className="hi-green">AWS Lambda</span> that automated collection from 12+ sources, cutting manual processing overhead by <span className="hi">60%</span>.</span>
      </li>
      <li>
        <span className="bullet-marker" aria-hidden>►</span>
        <span className="bullet-text">Architected modular, scalable AWS infrastructure achieving <span className="hi">99.9% uptime</span> — enabling the team to ship new AI features weekly without reliability tradeoffs.</span>
      </li>
    </ul>
  </div>
);

const HSBCBullets = () => (
  <div className="bullet-list-wrap">
    <ul className="bullets">
      <li>
        <span className="bullet-marker" aria-hidden>►</span>
        <span className="bullet-text">Led cloud migration from PCF to AWS — built a one-click <span className="hi">Node.js</span> migration utility adopted across teams, saving <span className="hi">$1.3M</span> in annual infrastructure costs and standardizing deployment practices bank-wide.</span>
      </li>
      <li>
        <span className="bullet-marker" aria-hidden>►</span>
        <span className="bullet-text">Rebuilt CI/CD pipelines with <span className="hi">Jenkins</span> + <span className="hi">Kubernetes</span>, cutting release cycle time by <span className="hi">75%</span> — what took days now ships in hours, with zero manual intervention.</span>
      </li>
      <li>
        <span className="bullet-marker" aria-hidden>►</span>
        <span className="bullet-text">Architected <span className="hi">Java Spring Boot</span> microservices serving <span className="hi">1M+</span> daily transactions on Kubernetes — with autoscaling and fault-tolerance baked in from day one.</span>
      </li>
      <li>
        <span className="bullet-marker" aria-hidden>►</span>
        <span className="bullet-text">Optimized <span className="hi">AWS Aurora DB</span> query patterns and parallel batch processing in HSBC's Self-Compliance Tool, cutting processing time by <span className="hi">50%</span> on regulatory data runs.</span>
      </li>
      <li>
        <span className="bullet-marker" aria-hidden>►</span>
        <span className="bullet-text">Implemented full-stack observability with <span className="hi">Splunk</span>, <span className="hi">AppDynamics</span>, and <span className="hi">DataDog</span> — reduced mean time to resolution on production incidents by <span className="hi">30%</span>.</span>
      </li>
    </ul>
  </div>
);

function CardWithGlow({ children, currentRole }) {
  const cardRef = useRef(null);
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1) + "%";
    const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1) + "%";
    card.style.setProperty("--mx", x);
    card.style.setProperty("--my", y);
  };
  return (
    <div
      ref={cardRef}
      className={`card ${currentRole ? "current-role" : ""}`}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
}

export default function Experience() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="exp-container" id="experience">
        <div className="page-header">
          <h1>Experience</h1>
          <div className="accent-line" />
        </div>

        <div className="timeline">
          {/* Linvest21 */}
          <div className="entry">
            <div className="dot-col">
              <div className="dot current" />
            </div>
            <CardWithGlow currentRole>
              <div className="card-header">
                <span className="role-title">AI Engineer</span>
                <div className="date-badge">
                  <span className="location">Remote · New York, USA</span>
                  Sept 2024 — Present
                </div>
              </div>
              <div className="company-line">
                <span className="company-name">Linvest21 Incorporated</span>
                <span className="current-badge">● CURRENT</span>
              </div>
              <p className="company-context">
                Early-stage AI fintech building intelligent tools for retail investors — making institutional-grade financial analysis accessible to everyone.
              </p>
              <LinvestBullets />
              <div className="tag-row">
                <span className="tag">LangGraph</span>
                <span className="tag">LangChain</span>
                <span className="tag">Apache Airflow</span>
                <span className="tag">AWS Lambda</span>
                <span className="tag">RAG</span>
                <span className="tag">Voice AI</span>
                <span className="tag">FastAPI</span>
              </div>
            </CardWithGlow>
          </div>

          {/* HSBC */}
          <div className="entry">
            <div className="dot-col">
              <div className="dot" />
            </div>
            <CardWithGlow>
              <div className="card-header">
                <span className="role-title">Senior Software Developer</span>
                <div className="date-badge">
                  <span className="location">Pune, India</span>
                  July 2019 — July 2023
                </div>
              </div>
              <div className="company-line">
                <span className="company-name">HSBC Software Development India</span>
              </div>
              <p className="company-context">
                One of the world's largest banking groups — building and maintaining core banking infrastructure at global scale.
              </p>
              <HSBCBullets />
              <div className="tag-row">
                <span className="tag">Java Spring Boot</span>
                <span className="tag">Kubernetes</span>
                <span className="tag">Jenkins</span>
                <span className="tag">AWS Aurora</span>
                <span className="tag">Terraform</span>
                <span className="tag">Docker</span>
                <span className="tag">Splunk</span>
                <span className="tag">Node.js</span>
              </div>
            </CardWithGlow>
          </div>

          {/* Early career - DRDO */}
          <div className="entry early-career">
            <div className="dot-col">
              <div className="dot early-dot" />
            </div>
            <div className="early-full">
              <div className="early-header">
                <div>
                  <div className="early-role">Engineering Intern</div>
                  <div className="early-company">DRDO (Defence Research & Development Organisation)</div>
                </div>
                <div className="early-date">
                  Pune, India<br />
                  May 2018 — July 2018
                </div>
              </div>
              <ul className="early-bullets">
                <li>Built a secure repository server that cut internal data transfer bandwidth by <span className="hi">90%</span> across the department.</li>
                <li>Automated patch management ensuring 100% compliance across 50+ government servers.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .exp-container {
          --bg-base: #1a1d23;
          --bg-card: #21252e;
          --bg-card-hover: #272c38;
          --accent: #4f9eff;
          --accent-glow: rgba(79, 158, 255, 0.18);
          --accent-dim: rgba(79, 158, 255, 0.1);
          --green: #3ecf8e;
          --green-dim: rgba(62, 207, 142, 0.1);
          --text-primary: #e8eaf2;
          --text-secondary: #8a94ae;
          --text-muted: #4e5668;
          --border: rgba(79, 158, 255, 0.18);
          --border-subtle: rgba(255, 255, 255, 0.055);
          --border-card: rgba(255, 255, 255, 0.07);

          font-family: "Sora", sans-serif;
          color: var(--text-primary);
          padding-bottom: 52px;
        }

        .page-header {
          margin-bottom: 52px;
        }

        .page-header h1 {
          font-size: 2.1rem;
          font-weight: 700;
          letter-spacing: -0.025em;
          margin-bottom: 10px;
        }

        .accent-line {
          width: 40px;
          height: 3px;
          background: var(--accent);
          border-radius: 2px;
        }

        .timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
        }

        .timeline::before {
          content: "";
          position: absolute;
          left: 19px;
          top: 28px;
          bottom: 28px;
          width: 1px;
          background: linear-gradient(to bottom, var(--accent) 0%, var(--border-subtle) 60%, transparent 100%);
        }

        .entry {
          display: grid;
          grid-template-columns: 40px 1fr;
          gap: 0 24px;
          padding-bottom: 36px;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.55s ease forwards;
        }

        .entry:nth-child(1) {
          animation-delay: 0.05s;
        }
        .entry:nth-child(2) {
          animation-delay: 0.18s;
        }
        .entry:nth-child(3) {
          animation-delay: 0.31s;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dot-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 22px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--accent);
          border: 2px solid var(--bg-base);
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }

        .dot.current {
          width: 14px;
          height: 14px;
          background: var(--green);
          box-shadow: 0 0 0 4px var(--green-dim), 0 0 14px rgba(62, 207, 142, 0.35);
          animation: pulse 2.2s ease-in-out infinite;
        }

        .dot.early-dot {
          width: 9px;
          height: 9px;
          background: var(--text-muted);
        }

        @keyframes pulse {
          0%,
          100% {
            box-shadow: 0 0 0 4px var(--green-dim), 0 0 14px rgba(62, 207, 142, 0.3);
          }
          50% {
            box-shadow: 0 0 0 7px var(--green-dim), 0 0 22px rgba(62, 207, 142, 0.5);
          }
        }

        .card {
          background: var(--bg-card);
          border: 1px solid var(--border-card);
          border-radius: 14px;
          padding: 26px 28px;
          transition: border-color 0.25s, background 0.25s, transform 0.25s;
          position: relative;
          overflow: hidden;
        }

        .card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            600px circle at var(--mx, 50%) var(--my, 50%),
            rgba(79, 158, 255, 0.04),
            transparent 60%
          );
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .card:hover::before {
          opacity: 1;
        }
        .card:hover {
          border-color: rgba(79, 158, 255, 0.22);
          background: var(--bg-card-hover);
          transform: translateY(-2px);
        }

        .card.current-role {
          border-left: 2px solid var(--green);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 4px;
        }

        .role-title {
          font-size: 1.12rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }

        .date-badge {
          font-family: "JetBrains Mono", monospace;
          font-size: 0.78rem;
          color: var(--text-muted);
          text-align: right;
          line-height: 1.5;
          flex-shrink: 0;
        }

        .date-badge .location {
          display: block;
          color: var(--text-muted);
        }

        .company-line {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
        }

        .company-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--accent);
          letter-spacing: 0.01em;
        }

        .current-badge {
          background: var(--green-dim);
          color: var(--green);
          font-size: 0.65rem;
          font-family: "JetBrains Mono", monospace;
          font-weight: 600;
          padding: 2px 9px;
          border-radius: 100px;
          border: 1px solid rgba(62, 207, 142, 0.25);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .company-context {
          font-size: 0.86rem;
          color: var(--text-muted);
          font-style: italic;
          margin-bottom: 18px;
        }

        .exp-container :global(.bullet-list-wrap) {
          padding-left: 16px;
          border-left: 1px solid var(--border-subtle);
          margin-top: 6px;
          margin-bottom: 0;
        }

        .exp-container :global(.bullets) {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .exp-container :global(.bullets li) {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 8px;
          align-items: start;
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 400;
          line-height: 1.6;
          font-family: "Sora", sans-serif;
        }

        .exp-container :global(.bullets li .bullet-text) {
          min-width: 0;
        }

        .exp-container :global(.bullet-marker) {
          color: var(--accent);
          font-size: 0.6rem;
          line-height: 1.6;
          padding-top: 2px;
          display: block;
          flex-shrink: 0;
        }

        .exp-container .card.current-role :global(.bullet-marker) {
          color: var(--green);
        }

        .exp-container :global(.hi) {
          color: var(--accent);
          font-weight: 400;
          font-family: "Sora", sans-serif;
        }

        .exp-container :global(.hi-green) {
          color: var(--green);
          font-weight: 400;
          font-family: "Sora", sans-serif;
        }

        .tag-row {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 18px;
          padding-top: 16px;
          border-top: 1px solid var(--border-subtle);
        }

        .tag {
          background: var(--accent-dim);
          color: var(--accent);
          font-size: 0.68rem;
          font-family: "JetBrains Mono", monospace;
          font-weight: 500;
          padding: 3px 10px;
          border-radius: 100px;
          border: 1px solid rgba(79, 158, 255, 0.18);
          letter-spacing: 0.03em;
        }

        .early-career {
          margin-top: -16px;
        }

        .early-full {
          background: transparent;
          border: 1px solid var(--border-subtle);
          border-radius: 10px;
          padding: 18px 22px;
          transition: border-color 0.2s;
        }

        .early-full:hover {
          border-color: var(--border);
        }

        .early-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .early-role {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .early-company {
          font-size: 0.74rem;
          color: var(--text-muted);
        }

        .early-date {
          font-size: 0.7rem;
          font-family: "JetBrains Mono", monospace;
          color: var(--text-muted);
          text-align: right;
        }

        .early-bullets {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-top: 10px;
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .early-bullets li::before {
          content: "› ";
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .entry {
            grid-template-columns: 28px 1fr;
            gap: 0 16px;
          }
          .timeline::before {
            left: 13px;
          }
          .dot-col {
            padding-top: 18px;
          }
          .card {
            padding: 20px 18px;
          }
        }
      `}</style>
    </>
  );
}
