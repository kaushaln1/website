import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import SectionHeading from "../SectionHeading";

const ProjectDetail = ({ project, onBack }) => {
    return (
        <div className="project-detail-view">
            <button className="back-btn" onClick={onBack}>
                <FaArrowLeft /> Back to Projects
            </button>
            
            <div className="detail-header">
                <h1>{project.title}</h1>
                <p className="summary">{project.summary}</p>
                {project.image && <img src={project.image} alt={project.title} className="hero-image" />}
            </div>

            <div className="detail-grid">
                <div className="detail-section">
                    <h3>Problem</h3>
                    <p>{project.problem}</p>
                </div>

                <div className="detail-section">
                    <h3>Solution & Outcome</h3>
                    <p>{project.outcome}</p>
                </div>

                <div className="detail-section full-width">
                    <h3>Tech Stack</h3>
                    <p className="stack-text">{project.stack}</p>
                </div>

                {project.architecture && (
                    <div className="detail-section full-width">
                        <h3>Architecture</h3>
                        <p>{project.architecture}</p>
                    </div>
                )}

                {project.designDecisions && (
                    <div className="detail-section full-width">
                        <h3>Key Design Decisions</h3>
                        <ul>
                            {project.designDecisions.map((d, i) => (
                                <li key={i}>{d}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {project.failureHandling && (
                    <div className="detail-section full-width">
                        <h3>Failure Handling</h3>
                        <ul>
                            {project.failureHandling.map((f, i) => (
                                <li key={i}>{f}</li>
                            ))}
                        </ul>
                    </div>
                )}

                 {project.highlights && (
                    <div className="detail-section full-width">
                        <h3>Highlights</h3>
                        <ul>
                            {project.highlights.map((h, i) => (
                                <li key={i}>{h}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {project.link && (
                <div className="action-area">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="visit-btn">
                        Visit Project / GitHub
                    </a>
                </div>
            )}

            <style jsx>{`
                .project-detail-view {
                    animation: fadeIn 0.3s ease-out;
                    color: #dfe6e9;
                    padding-bottom: 50px;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .back-btn {
                    background: transparent;
                    border: none;
                    color: #74b9ff;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 1rem;
                    margin-bottom: 30px;
                    font-family: Quicksand, sans-serif;
                    padding: 0;
                }

                .back-btn:hover {
                    color: #0984e3;
                    text-decoration: underline;
                }

                .detail-header {
                    margin-bottom: 40px;
                }

                h1 {
                    font-size: 2.5rem;
                    margin-bottom: 15px;
                    color: white;
                    font-family: Quicksand, sans-serif;
                    font-weight: 700;
                }

                .summary {
                    font-size: 1.2rem;
                    color: #b2bec3;
                    margin-bottom: 30px;
                    line-height: 1.6;
                }

                .hero-image {
                    width: 100%;
                    max-height: 400px;
                    object-fit: cover;
                    border-radius: 12px;
                    border: 1px solid #2d3436;
                }

                .detail-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 30px;
                    margin-bottom: 40px;
                }

                .detail-section {
                    background: #1e272e;
                    padding: 25px;
                    border-radius: 12px;
                    border: 1px solid #2d3436;
                }

                .full-width {
                    grid-column: 1 / -1;
                }

                h3 {
                    color: #74b9ff;
                    margin-bottom: 15px;
                    font-family: Quicksand, sans-serif;
                    text-transform: uppercase;
                    font-size: 0.9rem;
                    letter-spacing: 0.5px;
                }

                p, li {
                    line-height: 1.6;
                    color: #dfe6e9;
                    font-size: 1rem;
                }

                ul {
                    padding-left: 20px;
                    margin: 0;
                }

                li {
                    margin-bottom: 8px;
                }

                .stack-text {
                    font-family: monospace;
                    background: #2d3436;
                    padding: 10px;
                    border-radius: 6px;
                    display: inline-block;
                }

                .action-area {
                    text-align: center;
                    margin-top: 40px;
                }

                .visit-btn {
                    background: #0984e3;
                    color: white;
                    padding: 15px 40px;
                    border-radius: 8px;
                    text-decoration: none;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    transition: all 0.3s;
                    display: inline-block;
                }

                .visit-btn:hover {
                    background: #0070f3;
                    box-shadow: 0 4px 15px rgba(9, 132, 227, 0.4);
                }

                @media (max-width: 768px) {
                    .detail-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    h1 {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default function Work() {
    const [texts] = useState({
        title: "<strong>Projects</strong>",
        subtitle: "Production engineering & systems.",
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

    if (selectedProject) {
        return <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />;
    }

    return (
        <div className="container" id="portfolio">
            <SectionHeading title={texts.title} />
            
            <div className="projects-grid">
                {featuredProjects.map((project, index) => (
                    <div className="project-card featured" key={index} onClick={() => setSelectedProject(project)}>
                        <div className="card-image">
                             {project.image ? <img src={project.image} alt={project.title} /> : <div className="placeholder" />}
                        </div>
                        <div className="card-content">
                            <h3>{project.title}</h3>
                            <p className="summary">{project.summary}</p>
                            <div className="card-footer">
                                <span className="stack-label">Stack</span>
                                <span className="stack-text">{project.stack.split(',')[0]}...</span>
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
                            <p>{project.summary.substring(0, 60)}...</p>
                            <span className="arrow">→</span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .container {
            /* minimal padding */
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .project-card {
          background: #1e272e;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          border: 1px solid #2d3436;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .project-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          border-color: #0984e3;
        }

        .card-image {
            height: 150px;
            overflow: hidden;
            background: #2d3436;
        }

        .card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .project-card:hover .card-image img {
            transform: scale(1.05);
        }

        .card-content {
            padding: 20px;
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        .card-content h3 {
            color: #fff;
            margin-bottom: 8px;
            font-family: Quicksand, sans-serif;
            font-size: 1.1rem;
            line-height: 1.3;
            font-weight: 600;
        }

        .card-content .summary {
            color: #b2bec3;
            font-size: 0.9rem;
            line-height: 1.4;
            margin-bottom: 15px;
            flex: 1;
        }

        .card-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top: 1px solid #2d3436;
            padding-top: 12px;
        }

        .stack-label {
            color: #74b9ff;
            font-size: 0.75rem;
            text-transform: uppercase;
            font-weight: 600;
        }

        .stack-text {
            color: #dfe6e9;
            font-size: 0.85rem;
        }

        /* Other Projects List */
        .other-projects-section h3 {
            color: #dfe6e9;
            font-family: Quicksand, sans-serif;
            margin-bottom: 20px;
            font-weight: 300;
            font-size: 1.5rem;
            border-bottom: 1px solid #2d3436;
            padding-bottom: 10px;
        }

        .other-projects-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 15px;
        }

        .other-project-item {
            background: #1e272e;
            border: 1px solid #2d3436;
            padding: 15px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .other-project-item:hover {
            border-color: #0984e3;
            background: #252e35;
            transform: translateX(3px);
        }

        .other-project-item h4 {
            color: #74b9ff;
            margin-bottom: 5px;
            font-family: Quicksand, sans-serif;
            font-size: 1rem;
            font-weight: 600;
        }

        .other-project-item p {
            color: #b2bec3;
            font-size: 0.85rem;
            line-height: 1.4;
            margin-bottom: 0;
        }

        .other-project-item .arrow {
            position: absolute;
            right: 15px;
            top: 15px;
            color: #0984e3;
            opacity: 0;
            transition: opacity 0.2s;
        }

        .other-project-item:hover .arrow {
            opacity: 1;
        }

        @media (max-width: 768px) {
            
        }
      `}</style>
      <style jsx global>{`
        #portfolio strong {
            font-weight: 500;
        }
      `}</style>
        </div>
    );
}
