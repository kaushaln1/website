import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useState, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>
                <h2>{project.title}</h2>
                <p className="modal-summary">{project.summary}</p>
                
                {project.image && <img src={project.image} alt={project.title} />}

                <div className="modal-details">
                    {project.architecture && (
                        <div className="detail-row">
                            <strong>Architecture:</strong>
                            <p>{project.architecture}</p>
                        </div>
                    )}
                    {project.designDecisions && (
                        <div className="detail-row">
                            <strong>Key Design Decisions:</strong>
                            <ul>
                                {project.designDecisions.map((d, i) => (
                                    <li key={i}>{d}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {project.failureHandling && (
                        <div className="detail-row">
                            <strong>Failure Handling:</strong>
                            <ul>
                                {project.failureHandling.map((f, i) => (
                                    <li key={i}>{f}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className="detail-row">
                        <strong>Problem:</strong>
                        <p>{project.problem}</p>
                    </div>
                    <div className="detail-row">
                        <strong>Stack:</strong>
                        <p>{project.stack}</p>
                    </div>
                    <div className="detail-row">
                        <strong>Outcome:</strong>
                        <p>{project.outcome}</p>
                    </div>
                    {project.highlights && (
                        <div className="detail-row">
                            <strong>Highlights:</strong>
                            <ul>
                                {project.highlights.map((h, i) => (
                                    <li key={i}>{h}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {project.link && (
                         <div className="modal-action">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <button className="modal-explore-btn">
                                    <span>Visit Project / GitHub</span>
                                </button>
                            </a>
                        </div>
                    )}
                </div>
            </div>
            <style jsx>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.85);
                    z-index: 2000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 20px;
                    backdrop-filter: blur(5px);
                }
                .modal-content {
                    background: #1e272e;
                    padding: 40px;
                    border-radius: 12px;
                    max-width: 800px;
                    width: 100%;
                    max-height: 90vh;
                    overflow-y: auto;
                    position: relative;
                    color: #dfe6e9;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                    border: 1px solid #2d3436;
                    animation: slideUp 0.3s ease-out;
                }
                @keyframes slideUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .close-btn {
                    position: absolute;
                    top: 15px;
                    right: 20px;
                    background: transparent;
                    border: none;
                    color: #b2bec3;
                    font-size: 2.5rem;
                    line-height: 1;
                    cursor: pointer;
                    transition: color 0.3s;
                    z-index: 1;
                }
                .close-btn:hover {
                    color: #ff7675;
                }
                h2 {
                    color: white;
                    font-family: Quicksand, sans-serif;
                    margin-bottom: 10px;
                    font-size: 2rem;
                    margin-top: 0;
                }
                .modal-summary {
                    font-size: 1.1em;
                    color: #b2bec3;
                    margin-bottom: 25px;
                    line-height: 1.5;
                    border-bottom: 1px solid #2d3436;
                    padding-bottom: 15px;
                }
                img {
                    width: 100%;
                    height: auto;
                    border-radius: 8px;
                    margin-bottom: 20px;
                }
                .detail-row {
                    margin-bottom: 20px;
                }
                .detail-row strong {
                    display: block;
                    margin-bottom: 8px;
                    color: #74b9ff;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    font-size: 0.9rem;
                }
                .detail-row p, .detail-row li {
                    line-height: 1.6;
                    color: #dfe6e9;
                    font-size: 1rem;
                }
                .detail-row ul {
                    padding-left: 20px;
                    margin: 0;
                }
                .detail-row li {
                    margin-bottom: 5px;
                }
                .modal-action {
                    margin-top: 30px;
                    text-align: center;
                }
                .modal-explore-btn {
                    background: #0984e3;
                    color: white;
                    border: none;
                    border-radius: 6px;
                    padding: 12px 30px;
                    cursor: pointer;
                    font-size: 1rem;
                    font-weight: 600;
                    transition: all 0.3s;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .modal-explore-btn:hover {
                    background: #0070f3;
                    box-shadow: 0 4px 15px rgba(9, 132, 227, 0.4);
                }
                @media screen and (max-width: 768px) {
                    .modal-content {
                        padding: 25px;
                    }
                    h2 {
                        font-size: 1.5rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default function WorkDesktop() {
    const [texts] = useState({
        title: "<strong>Projects</strong> & Case Studies.",
        subtitle: "End-to-End MLOps Pipelines, System Design, and Production Engineering.",
    });
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "End-to-End Credit Scoring Pipeline",
            summary: "Real-time credit default prediction pipeline with automated retraining",
            problem: "Need for a production-ready ML pipeline to predict credit defaults with low latency and high reliability.",
            stack: "Python, Airflow, Docker, MLflow, AWS EKS, Terraform",
            outcome: "Real-time scoring API with CI/CD and automated retraining loops.",
            highlights: [
                "Implemented Airflow pipelines for ETL and model training coordination",
                "Integrated MLflow for experiment tracking and model registry",
                "Deployed containerized inference service on EKS with Horizontal Pod Autoscaling"
            ],
            architecture: "Microservices architecture on EKS. Airflow orchestrates ETL jobs triggering SageMaker training jobs. Model artifacts stored in S3/MLflow. Inference via FastAPI pods behind ALB.",
            designDecisions: [
                "Separated training and inference clusters for cost optimization.",
                "Used Feature Store (Feast) to ensure consistency between training and serving.",
                "Adopted GitOps (ArgoCD) for reliable deployment of model updates."
            ],
            failureHandling: [
                "Implemented circuit breakers for downstream dependencies.",
                "Automated rollback strategies if new model version increases latency beyond SLA.",
                "Dead letter queues for failed inference requests."
            ],
            link: "#",
            image: "aws_medium.png",
        },
        {
            title: "ML Model Monitoring System",
            summary: "Observability platform for detecting data drift and model degradation",
            problem: "Lack of visibility into model performance in production led to silent failures.",
            stack: "Prometheus, Grafana, Evidently AI, FastAPI, Kubernetes",
            outcome: "Reduced time-to-detection of model drift from weeks to hours.",
            highlights: [
                "Set up real-time dashboarding for distribution drift and performance metrics",
                "Automated alerting system for concept drift detection",
                "Integrated with slack for immediate team notification"
            ],
            architecture: "Sidecar pattern for metric collection. Request/Response payloads logged to Kafka, processed by Evidently AI workers, metrics pushed to Prometheus.",
            designDecisions: [
                "Decoupled monitoring from the inference path to avoid latency impact.",
                "Used Prometheus for time-series storage due to its native K8s integration.",
                "Implemented alert routing via Alertmanager to Slack/PagerDuty."
            ],
            failureHandling: [
                "Graceful degradation if monitoring service is down (inference continues).",
                "Buffer mechanisms for high-throughput metric ingestion."
            ],
            link: "#",
            image: "aws_medium.png",
        },
        {
            title: "Distributed Training Infrastructure",
            summary: "Scalable infrastructure for training large language models",
            problem: "Training large models on single instances was slow and memory-constrained.",
            stack: "PyTorch Lightning, Ray, AWS EC2, S3, Docker",
            outcome: "Reduced training time by 60% through distributed data parallelism.",
            highlights: [
                "Architected multi-node training cluster using Ray",
                "Optimized data loading pipeline from S3 to GPU instances",
                "Implemented checkpointing and fault-tolerance mechanisms"
            ],
            architecture: "Ray cluster on EC2 Spot instances. S3 as the central data lake. FSx for high-performance checkpoint storage.",
            designDecisions: [
                "Utilized Spot instances with aggressive checkpointing to reduce costs by 70%.",
                "Selected Ray for its superior actor-based handling of dynamic worker scaling.",
                "Optimized Dataloaders with pre-fetching and caching strategies."
            ],
            failureHandling: [
                "Automatic worker replacement for Spot interruptions.",
                "Frequent checkpointing to S3 to minimize lost computation time.",
                "Heartbeat monitoring for stuck workers."
            ],
            link: "#",
            image: "aws_medium.png",
        },
        {
            title: "Terraform Code Generator with AI & RAG",
            summary: "AI-powered tool to automate Infrastructure-as-Code creation",
            problem: "Manual creation of Terraform modules was repetitive and error-prone.",
            stack: "Python, LangChain, OpenAI API, ChromaDB, Streamlit",
            outcome: "Accelerated infrastructure provisioning by 40% for standard patterns.",
            highlights: [
                "Built RAG pipeline to retrieve relevant Terraform docs and examples",
                "Developed interactive UI for intent-based code generation",
                "Integrated validation steps to ensure generated code syntax correctness"
            ],
            architecture: "RAG pipeline with Vector DB (Chroma). User intent classifier -> Retrieval -> LLM Generation -> Syntax Validator.",
            designDecisions: [
                "Used a specialized vector store for efficient similarity search of Terraform docs.",
                "Implemented a feedback loop where user corrections improve the prompt context."
            ],
            failureHandling: [
                "Fallback to standard templates if retrieval confidence is low.",
                "Retry logic for LLM API timeouts."
            ],
            link: null,
            image: "aws_medium.png",
        },
        {
            title: "KubeControl App",
            summary: "Containerized application deployment platform on EKS",
            problem: "Managing Kubernetes deployments required complex CLI commands and high cognitive load.",
            stack: "React.js, Flask, Kubernetes API, AWS EKS, Docker",
            outcome: "Simplified deployment process and reduced onboarding time for developers.",
            highlights: [
                "Created a user-friendly UI for managing deployed apps",
                "Reduced deployment time significantly via automation",
                "Secured integration with AWS EKS using role-based access"
            ],
            architecture: "React Frontend -> Flask Backend -> Kubernetes API Server. IAM Authenticator for EKS access.",
            designDecisions: [
                "Direct integration with K8s API rather than wrapping Helm for finer-grained control.",
                "Role-Based Access Control (RBAC) mapping to IAM roles for security."
            ],
            failureHandling: [
                "Detailed error logs exposed to UI for deployment failures.",
                "Automatic retry for transient API server errors."
            ],
            link: "https://github.com/kaushaln1/KubeControl/tree/master",
            image: "aws_medium.png",
        },
        {
            title: "Slack App for Access Management",
            summary: "ChatOps integration for requesting production access (PAR)",
            problem: "Manual requests for production access were slow, hard to track, and lacked auditability.",
            stack: "Node.js, Slack API, AWS Lambda, DynamoDB",
            outcome: "Streamlined access requests directly within Slack, improving compliance.",
            highlights: [
                "Implemented interactive slash commands for access requests",
                "Automated retrieval of access logs from granting server",
                "Reduced support ticket volume for access issues"
            ],
            architecture: "Slack Webhook -> API Gateway -> Lambda -> DynamoDB (Audit Log) & IAM Policy Update.",
            designDecisions: [
                "Serverless architecture (Lambda) for cost-efficiency given the bursty traffic pattern.",
                "DynamoDB for immutable audit trail of all access grants."
            ],
            failureHandling: [
                "Slack notification to admin channel if Lambda execution fails.",
                "Idempotency checks to prevent duplicate access grants."
            ],
            link: "https://github.com/kaushaln1/slackApp",
            image: "aws_medium.png"
        },
        {
            title: "End to End CI/CD Pipeline",
            summary: "Automated build, test, and deploy pipeline for Spring Boot on K8s",
            problem: "Manual deployments were inconsistent and lacked automated quality checks.",
            stack: "Jenkins, Docker, Kubernetes, Helm, SonarQube, Trivy",
            outcome: "Fully automated path to production with integrated security gates.",
            highlights: [
                "Integrated security scanning with Trivy and code quality with SonarQube",
                "Automated versioning and Helm chart upgrades",
                "Ensured consistent environments from dev to production"
            ],
            architecture: "Git Push -> Jenkins Webhook -> Build -> Unit Test -> Sonar Scan -> Docker Build -> Trivy Scan -> Helm Upgrade -> K8s.",
            designDecisions: [
                "Pipeline as Code (Jenkinsfile) for version control of the build process.",
                "Immutable artifacts: Docker images tagged with commit SHA."
            ],
            failureHandling: [
                "Pipeline stops immediately on any test or security failure.",
                "Slack notification with direct link to build logs."
            ],
            link: "https://github.com/kaushaln1/End_to_End_pipeline_scripts",
            image: "aws_medium.png"
        },
        {
            title: "Kong Gateway on Kubernetes",
            summary: "API Gateway configuration and management for microservices",
            problem: "Need for a centralized API gateway to manage microservices traffic and auth.",
            stack: "Kong, Kubernetes, Helm, Lua",
            outcome: "Centralized authentication and rate limiting for microservices architecture.",
            highlights: [
                "Deployed Kong via Helm in DB-less mode for GitOps compatibility",
                "Configured routes and services for echo server testing",
                "Demonstrated microservice pattern support"
            ],
            architecture: "Ingress Controller -> Kong Gateway (Data Plane) -> Microservices.",
            designDecisions: [
                "DB-less mode to manage configuration via declarative YAML files (GitOps friendly).",
                "Used Kong Ingress Controller for native K8s integration."
            ],
            failureHandling: [
                "Liveness and Readiness probes configured for Kong pods.",
                "Fallback routing for failed services."
            ],
            link:  "https://github.com/kaushaln1/KongGateway_k8s",
            image: "aws_medium.png"
        },
        {
            title: "A2CW (Automated API Compliance Watch)",
            summary: "Compliance and monitoring pipeline for cloud applications",
            problem: "Ensuring cloud compliance and connectivity patterns for AWS Aurora integration was manual.",
            stack: "Kubernetes, AWS Aurora, AppDynamics, Splunk",
            outcome: "Enhanced compliance monitoring and seamless DB integration.",
            highlights: [
                "Designed Cloud Connectivity Pattern for AWS Aurora",
                "Led configuration of AppDynamics and Splunk for monitoring",
                "Optimized batch jobs for bulk data processing"
            ],
            architecture: "Scheduled CronJobs on K8s -> Compliance Checks Script -> AWS Config/CloudTrail APIs -> Report Generation.",
            designDecisions: [
                "Containerized compliance scripts for portability.",
                "Centralized logging to Splunk for audit purposes."
            ],
            failureHandling: [
                "Alerts on job failure.",
                "Retry mechanism for AWS API throttling."
            ],
            link: null,
            image: "aws_medium.png",
        },
        {
            title: "Samba Sheep API Migration Tool",
            summary: "Migration utility for moving APIs from PCF to AWS",
            problem: "Migrating legacy APIs from Pivotal Cloud Foundry to AWS was manual and time-consuming.",
            stack: "Node.js, AWS, Pivotal Cloud Foundry (PCF)",
            outcome: "Saved approximately $1.3 million by automating migration of hundreds of APIs.",
            highlights: [
                "Designed one-click Node.js solution for migration",
                "Streamlined API transition process",
                "Encouraged inner-sourcing for wider adoption across the bank"
            ],
            architecture: "CLI Tool -> Reads PCF Manifest -> Generates AWS CloudFormation/Terraform -> Deploys to AWS.",
            designDecisions: [
                "Node.js for cross-platform compatibility.",
                "Template-based generation to support multiple target architectures."
            ],
            failureHandling: [
                "Rollback logic to clean up partially created resources.",
                "Validation mode (dry-run) to catch config errors before deployment."
            ],
            link: null,
            image: "aws_medium.png",
        },
    ];

    const featuredProjects = projects.slice(0, 3);
    const otherProjects = projects.slice(3);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [selectedProject]);

    return (
        <div className="container" id="portfolio">
            <section id="section3">
                <div className="content">
                    <h2 dangerouslySetInnerHTML={{ __html: texts.title }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: texts.subtitle }}></p>
                </div>
            </section>
            
            <div className="projects">
                {featuredProjects.map((project, index) => (
                    <div className="project-tile" key={index}>
                        <h2>{project.title}</h2>
                        <p className="summary">{project.summary}</p>
                        {project.image && <img src={project.image} alt={project.title} />}
                        
                        <div className="project-details">
                            <div className="detail-preview">
                                <strong>Stack:</strong>
                                <p>{project.stack}</p>
                            </div>
                            
                            <div className="box">
                                <button className="explore-btn" onClick={() => setSelectedProject(project)}>
                                    <span>Explore More</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="other-projects-section">
                <h3>More Projects</h3>
                <div className="other-projects-list">
                    {otherProjects.map((project, index) => (
                        <div className="other-project-item" key={index + 3} onClick={() => setSelectedProject(project)}>
                            <h4>{project.title}</h4>
                            <p>{project.summary}</p>
                            <span className="arrow">→</span>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}

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

        section .content {
          display: flex;
          flex-direction: column;
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
        }

        section .content p {
          font-family: Quicksand, -apple-system, BlinkMacSystemFont, "Segoe UI",
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 1.5873vw;
          line-height: 140%;
          color: #ffffff;
          margin-bottom: 2.513vw;
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
        }
        
        @media only screen and (max-width: 526px) {
          section .content h2 {
            font-size: 29px;
          }
        }

        .projects {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
          padding-bottom: 30px;
        }

        .project-tile {
          background: #1e272e;
          border-radius: 12px;
          padding: 30px;
          width: 100%;
          max-width: 400px;
          text-align: left;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          color: #dfe6e9;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #2d3436;
        }

        .project-tile:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
          border-color: #0984e3;
        }

        .project-tile h2 {
          font-size: 1.4em;
          margin-bottom: 10px;
          color: #fff;
          font-family: Quicksand, sans-serif;
          font-weight: 700;
          width: 100%;
        }

        .summary {
            font-size: 0.95em;
            color: #b2bec3;
            margin-bottom: 15px;
            font-style: normal;
            line-height: 1.5;
            width: 100%;
            flex-grow: 1;
        }

        .project-tile img {
          width: 100%;
          height: auto;
          margin-bottom: 15px;
          border-radius: 8px;
        }

        .project-details {
          margin-top: auto;
          width: 100%;
        }

        .detail-preview {
            margin-bottom: 15px;
        }

        .detail-preview strong {
            display: block;
            margin-bottom: 4px;
            color: #74b9ff;
            font-size: 0.85em;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .detail-preview p {
            margin: 0;
            font-size: 0.9em;
            color: #dfe6e9;
            line-height: 1.4;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .box {
          margin-top: 15px;
          text-align: left;
        }

        .explore-btn {
          background: transparent;
          color: #0984e3;
          border: 1px solid #0984e3;
          border-radius: 6px;
          padding: 8px 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
          font-weight: 600;
          font-size: 0.9em;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .explore-btn:hover {
          background: #0984e3;
          color: white;
          box-shadow: 0 4px 10px rgba(9, 132, 227, 0.3);
        }

        /* Other Projects Section */
        .other-projects-section {
            max-width: 1200px;
            margin: 40px auto 0;
            padding: 0 20px 50px;
        }
        
        .other-projects-section h3 {
            color: white;
            font-family: Quicksand, sans-serif;
            margin-bottom: 30px;
            text-align: center;
            font-size: 1.8rem;
            font-weight: 300;
        }
        
        .other-projects-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
        }
        
        .other-project-item {
            background: #1e272e;
            border: 1px solid #2d3436;
            padding: 25px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            position: relative;
        }
        
        .other-project-item:hover {
            border-color: #0984e3;
            transform: translateY(-3px);
            background: #252e35;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        .other-project-item h4 {
            color: #74b9ff;
            margin-bottom: 10px;
            font-family: Quicksand, sans-serif;
            font-size: 1.1rem;
            font-weight: 600;
        }
        
        .other-project-item p {
            color: #b2bec3;
            font-size: 0.9rem;
            line-height: 1.5;
            margin-bottom: 15px;
            flex-grow: 1;
        }
        
        .other-project-item .arrow {
            align-self: flex-end;
            color: #0984e3;
            font-size: 1.2rem;
            transition: transform 0.3s;
        }
        
        .other-project-item:hover .arrow {
            transform: translateX(5px);
        }
      `}</style>
        </div>
    );
}
