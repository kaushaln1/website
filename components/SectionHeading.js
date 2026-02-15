import React from 'react';

export default function SectionHeading({ title }) {
    return (
        <div className="section-heading">
            <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
            <div className="underline"></div>
            <style jsx>{`
                .section-heading {
                    margin-bottom: 30px;
                }
                
                h1 {
                    font-family: Quicksand, sans-serif;
                    font-weight: 600;
                    font-size: 2.5rem;
                    color: white;
                    margin-bottom: 5px;
                }

                .underline {
                    width: 50px;
                    height: 4px;
                    background-color: #0984e3;
                    border-radius: 2px;
                    margin-bottom: 20px;
                }

                @media (max-width: 768px) {
                    h1 {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </div>
    );
}

