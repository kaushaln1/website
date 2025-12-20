import { useState } from "react";
import { FaArrowLeft, FaMedium } from "react-icons/fa";
import SectionHeading from "../SectionHeading";

export default function Blogs() {
    const [texts] = useState({
        title: `<strong>Blogs</strong>`,
        subtitle: `Technical articles & case studies.`,
    });
    
    const [selectedPost, setSelectedPost] = useState(null);

    const blogPosts = [
        {
            title: "Designing a Drift-Resilient ML System",
            image: "aws_medium.png", 
            link: "#",
            summary: "A deep dive into building machine learning systems that can detect and adapt to data drift in production environments.",
        },
        {
            title: "Why ML Systems Fail in Production",
            image: "aws_medium.png",
            link: "#",
            summary: "Analyzing common failure modes in MLOps and how to mitigate them through better monitoring and testing.",
        },
        {
            title: "Cost Tradeoffs in Real-Time ML",
            image: "aws_medium.png",
            link: "#",
            summary: "Balancing latency, throughput, and cost when deploying real-time inference services on cloud infrastructure.",
        },
        {
            title: "AWS Developer Associate Certification",
            image: "aws_medium.png",
            link: "https://medium.com/@kaushalv.nerkar/my-experience-with-aws-developer-associate-certification-356ba9f656db",
            summary: "My preparation strategy, resources used, and exam day experience for passing the AWS Developer Associate exam.",
        },
        {
            title: "Terraform Developer Associate Certification",
            image: "aws_medium.png",
            link: "https://medium.com/aws-tip/my-terraform-developer-associate-certification-experience-35b55c2e7fb",
            summary: "How I prepared for and passed the HashiCorp Terraform Associate certification, including key topics and practice tips.",
        },
    ];

    if (selectedPost) {
        return (
            <div className="blog-detail-view">
                <button className="back-btn" onClick={() => setSelectedPost(null)}>
                    <FaArrowLeft /> Back to Blogs
                </button>

                <div className="detail-content">
                    <h1>{selectedPost.title}</h1>
                    <div className="image-container">
                        <img src={selectedPost.image} alt={selectedPost.title} />
                    </div>
                    
                    <p className="detail-summary">{selectedPost.summary}</p>
                    
                    {selectedPost.link && selectedPost.link !== "#" ? (
                        <a href={selectedPost.link} target="_blank" rel="noopener noreferrer" className="read-more-btn">
                            <FaMedium /> Read full article on Medium
                        </a>
                    ) : (
                        <div className="coming-soon-banner">
                            This article is coming soon. Stay tuned!
                        </div>
                    )}
                </div>

                <style jsx>{`
                    .blog-detail-view {
                        animation: fadeIn 0.3s ease-out;
                        color: #dfe6e9;
                        padding-bottom: 20px;
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
                        font-size: 0.9rem;
                        margin-bottom: 20px;
                        font-family: Quicksand, sans-serif;
                        padding: 0;
                    }
                    
                    .back-btn:hover {
                        text-decoration: underline;
                    }

                    .detail-content {
                        background: #1e272e;
                        padding: 30px;
                        border-radius: 12px;
                        border: 1px solid #2d3436;
                        max-width: 800px;
                    }

                    h1 {
                        color: white;
                        font-family: Quicksand, sans-serif;
                        font-size: 2rem;
                        margin-bottom: 20px;
                    }

                    .image-container {
                        width: 100%;
                        height: 250px;
                        margin-bottom: 25px;
                        overflow: hidden;
                        border-radius: 8px;
                    }

                    .image-container img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    .detail-summary {
                        font-size: 1.1rem;
                        line-height: 1.6;
                        color: #b2bec3;
                        margin-bottom: 30px;
                    }

                    .read-more-btn {
                        display: inline-flex;
                        align-items: center;
                        gap: 10px;
                        background: #00ab6c; /* Medium Green */
                        color: white;
                        padding: 10px 25px;
                        border-radius: 30px;
                        text-decoration: none;
                        font-weight: 600;
                        font-size: 1rem;
                        transition: transform 0.2s;
                    }

                    .read-more-btn:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 5px 15px rgba(0, 171, 108, 0.4);
                    }

                    .coming-soon-banner {
                        background: #2d3436;
                        color: #dfe6e9;
                        padding: 15px;
                        text-align: center;
                        border-radius: 8px;
                        font-style: italic;
                    }

                    @media (max-width: 768px) {
                        .detail-content {
                            padding: 20px;
                        }
                        h1 {
                            font-size: 1.8rem;
                        }
                    }
                `}</style>
            </div>
        );
    }

    return (
        <div className="container" id="blogs">
            <div className="content">
                <SectionHeading title={texts.title} />
                <div className="cards">
                    {blogPosts.map((post, index) => (
                        <div 
                            className="card" 
                            key={index} 
                            onClick={() => setSelectedPost(post)}
                        >
                            <div className="card-image">
                                <img src={post.image} alt={post.title} />
                                {(!post.link || post.link === "#") && (
                                    <span className="coming-soon">Coming Soon</span>
                                )}
                            </div>
                            <div className="card-body">
                                <h3>{post.title}</h3>
                                {post.summary && <p className="card-summary">{post.summary.substring(0, 80)}...</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <style jsx>{`
                .container {
                    /* minimal padding */
                }

                .cards {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 20px;
                }

                .card {
                    background-color: #1e272e;
                    border-radius: 10px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    cursor: pointer;
                    transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    border: 1px solid #2d3436;
                    overflow: hidden;
                }

                .card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 15px rgba(0,0,0,0.3);
                    border-color: #0984e3;
                }

                .card-image {
                    height: 160px;
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                }

                .card-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s;
                }

                .card:hover .card-image img {
                    transform: scale(1.05);
                }

                .card-body {
                    padding: 15px;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }

                .card h3 {
                    font-family: Quicksand, sans-serif;
                    font-weight: 600;
                    font-size: 1.1rem;
                    line-height: 1.3;
                    color: #fff;
                    margin-bottom: 8px;
                }

                .card-summary {
                    font-size: 0.85rem;
                    color: #b2bec3;
                    line-height: 1.4;
                }
                
                .coming-soon {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: #ff7675;
                    color: white;
                    padding: 3px 8px;
                    border-radius: 4px;
                    font-size: 0.7em;
                    font-weight: bold;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                }

                @media screen and (max-width: 768px) {
                    
                }
            `}</style>
            <style jsx global>{`
                #blogs strong {
                    font-weight: 500;
                }
            `}</style>
        </div>
    );
}
