/**
 *
 * Footer
 *
 * @param {String} text - Footer text
 *
 */

export default function CommonFooter() {
    return (
        <>
            <footer>
                <hr className="solid" />
                <h2>Built by Kaushal N. |  Status :<a href="https://uptime.kaushalnerkar.tech" target="_blank"
                                                     rel="noopener noreferrer"> Uptime </a> </h2>
            </footer>
            <style jsx>{`
                footer {
                    padding-bottom: 0.1%;
                    text-align: center;
                    background: #2d3436;
                }

                footer a {
                    color: #65884f;
                }

                footer h2 {
                    font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
                    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
                    font-style: normal;
                    font-weight: 200;
                    font-size: 0.8873vw;
                    line-height: 140%;
                    color: #f39d3f;
                    padding-top: 1vw;
                }

                @media screen AND (max-width: 526px) {
                    footer {
                        width: 100%;
                        padding: 0;
                        padding-top: 2vh;
                        background: #2d3436;
                    }

                    footer a {
                        color: #65884f;
                    }

                    footer h2 {
                        font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
                        Helvetica, Arial, sans-serif, "Apple Color Emoji",
                        "Segoe UI Emoji";
                        font-style: normal;
                        font-weight: 200;
                        font-size: 2.8873vw;
                        line-height: 140%;
                        color: #f39d3f;
                        padding-top: 1vw;
                    }
                }
            `}</style>
            <style global jsx>
                {`
          footer .page-links .col a {
            color: var(--title-color);
            flex: 1;
            margin-bottom: 8px;
          }

          footer div.store-links a img {
            height: 38px;
          }
        `}
            </style>
        </>
    );
}
