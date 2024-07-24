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
        title: `<strong>Blogs,</strong> my thoughts and insights`,
        subtitle: `Explore my latest articles and thoughts on various topics.`,
    });

    const blogPosts = [
        {
            title: "My Experience with AWS Developer Associate Certification",
            image: "aws_medium_2.gif", // Replace with actual image URL
            link: "https://medium.com/@kaushalv.nerkar/my-experience-with-aws-developer-associate-certification-356ba9f656db",
        },
        {
            title: "My Terraform Developer Associate Certification Experience!",
            image: "aws_medium_1.gif", // Replace with actual image URL
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
                            <div className="card" key={index} onClick={() => window.open(post.link, "_blank")}>
                                <img src={post.image} alt={post.title} />
                                <h3>{post.title}</h3>
                            </div>
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
                    background-color: #384242;
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

                section .cards {
                    display: flex;
                    justify-content: space-between; /* Adjust as needed */
                    margin-top: 2vw;
                }

                section .card {
                    background-color: #f8f9fa; /* Card background color */
                    border-radius: 8px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    width: 45%; /* Adjust width as needed */
                    cursor: pointer;
                    transition: transform 0.3s;
                }

                section .card:hover {
                    transform: scale(1.05);
                }

                section .card img {
                    width: 100%;
                    border-top-left-radius: 8px;
                    border-top-right-radius: 8px;
                }

                section .card h3 {
                    font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
                    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
                    font-style: normal;
                    font-weight: 500;
                    font-size: 1.8vw; /* Adjust as needed */
                    line-height: 122%;
                    color: #2d3436;
                    padding: 10px;
                    margin: 0;
                }

                @media screen and (max-width: 992px) {
                    section .card {
                        width: 100%; /* Stack cards on smaller screens */
                        margin-bottom: 20px;
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
}
