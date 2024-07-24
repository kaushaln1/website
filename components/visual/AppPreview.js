import React from "react";

/**
 * Image Preview component. This component is used on the very first page.
 * The image is static, but it can be changed if needed.
 *
 * @param {String} image - Image shown in the preview.
 */
const ImagePreview = () => {
    return (
        <>
            <div className="container">
                <img src="/homeImage.png" alt="Preview Image" />
            </div>
            <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .container img {
          width: 65%;
        }

        @media screen and (max-width: 526px) {
          .container img {
            width: 100%;
          }
        }
      `}</style>
        </>
    );
};

export default ImagePreview;
