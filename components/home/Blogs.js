import { useState } from "react";

/**
 *
 * Blogs component. Displays a list of blog posts.
 *
 * @param {String} title - Title of the component.
 * @param {String} subtitle - Subtitle of the component.
 *
 */

export default function Blogs() {
    const [texts] = useState({
        title: `<strong>Blogs & Case Studies,</strong> technical deep dives`,
        subtitle: `Explore my latest technical articles, system design case studies, and certification experiences.`,
    });

    const blogPosts = [
        {
            title: "Designing a Drift-Resilient ML System",
            image: "aws_medium.png", 
            link: "#",
        },
        {
            title: "Why ML Systems Fail in Production",
            image: "aws_medium.png",
            link: "#",
        },
        {
            title: "Cost Tradeoffs in Real-Time ML",
            image: "aws_medium.png",
            link: "#",
        },
        {
            title: "My Experience with AWS Developer Associate Certification",
            image: "aws_medium.png",
            link: "https://medium.com/@kaushalv.nerkar/my-experience-with-aws-developer-associate-certification-356ba9f656db",
        },
        {
            title: "My Terraform Developer Associate Certification Experience!",
            image: "aws_medium.png",
            link: "https://medium.com/aws-tip/my-terraform-developer-associate-certification-experience-35b55c2e7fb",
        },
    ];

    return (
        <>
            <section id="blogs">
                <div className="content">
                    <h2 dangerouslySetInnerHTML={{ __html: texts.title }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: texts.subtitle }}></p>
                    <div className="cards">
                        {blogPosts.map((post, index) => (
                            post.link !== "#" ? (
                                <a href={post.link} target="_blank" rel="noopener noreferrer" className="card" key={index}>
                                    <img src={post.image} alt={post.title} />
                                    <h3>{post.title}</h3>
                                </a>
                            ) : (
                                <div className="card" key={index}>
                                    <img src={post.image} alt={post.title} />
                                    <h3>{post.title}</h3>
                                    <span className="coming-soon">Coming Soon</span>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </section>
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
                    color: #ffffff;
                    margin-bottom: 2.513vw;
                    animation-delay: 0.3s;
                }

                section .cards {
                    display: flex;
                    flex-wrap: wrap; /* Allow wrapping */
                    justify-content: flex-start; /* Align left */
                    gap: 2%; /* Gap between cards */
                    margin-top: 2vw;
                }

                section .card {
                    background-color: #f8f9fa;
                    border-radius: 8px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    width: 31%; /* 3 cards per row approx */
                    cursor: pointer;
                    transition: box-shadow 0.3s;
                    margin-bottom: 20px;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    text-decoration: none; /* For anchor tags */
                }

                section .card:hover {
                    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
                }

                section .card img {
                    width: 100%;
                    height: 200px; /* Fixed height for consistency */
                    object-fit: cover;
                    border-top-left-radius: 8px;
                    border-top-right-radius: 8px;
                    transition: opacity 0.3s;
                }

                section .card:hover img {
                    opacity: 0.9;
                }

                section .card h3 {
                    font-family: Quicksand, -apple-system, BlinkMacSystemFont, "Segoe UI",
                    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
                    font-style: normal;
                    font-weight: 500;
                    font-size: 1.2vw;
                    line-height: 1.4;
                    color: #2d3436;
                    padding: 15px;
                    margin: 0;
                    flex-grow: 1;
                }
                
                .coming-soon {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: #ff7675;
                    color: white;
                    padding: 4px 8px;
                    border-radius: 4px;
                    font-size: 0.8em;
                    font-weight: bold;
                }

                @media screen and (max-width: 992px) {
                    section .card {
                        width: 48%; /* 2 cards per row */
                    }
                    section .card h3 {
                        font-size: 16px;
                    }
                }

                @media screen and (max-width: 600px) {
                     section .card {
                        width: 100%; /* 1 card per row */
                    }
                }
            `}</style>
        </>
    );
}
