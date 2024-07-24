/**
 *
 * Shared Hero Component of the website
 *
 * @param {String} title - Title of the hero component.
 * @param {String} subtitle - Subtitle of the hero component.
 * @param {String} background - Background image of the hero component.
 * @param {String} backgroundStyle - The style of Background of the hero component.
 *
 */

export default function Hero({ title, subtitle, background, backgroundStyle, style }) {
    return (
        <>
            <div className="container" style={style}>
                {background && (
                    <div className="bg-container">
                        <img src={background} style={backgroundStyle} alt="Background" />
                    </div>
                )}
                <h2>{title}</h2>
                {subtitle && <h5>{subtitle}</h5>}
            </div>

            <style jsx>{`
        .container {
          width: 100vw;
          height: 48vw;
          padding-top: 8vw;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          position: relative;
        }

        .container h2 {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 500;
          line-height: 135%;
          color: var(--title-color);
          margin-bottom: 2.777vw;
          font-size: min(65px, 9vw);
          text-align: center;
          z-index: 1;
          width: 60%;
        }

        .container h5 {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 400;
          color: #2d3436;
          margin-top: 2vw;
          font-size: min(25px, 3.6vw);
          text-align: center;
          z-index: 1;
          padding: 0 10vw;
          width: 80%;
        }

        .container .bg-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 60vw;
          z-index: -1;
          overflow-x: hidden;
        }

        .container .bg-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media screen and (max-width: 526px) {
          .container {
            min-height: 40vh;
            max-height: 80vh;
            height: auto;
            padding-top: 40px;
            padding-bottom: 40px;
          }

          .container h2 {
            margin-top: 10vh;
            width: 75%;
          }

          .container .bg-container {
            top: 4vh;
            height: 100%;
          }
        }
      `}</style>
        </>
    );
}
