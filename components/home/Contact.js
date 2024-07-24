import {useRef, useState} from "react";
import emailjs from "emailjs-com";

/**
 *
 * Contact component. Here you can explain your Contact status.
 *
 * @param {String} title - Title of the component.
 * @param {String} subtitle - Subtitle of the component.
 *
 */
const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID ;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const userId = process.env.NEXT_PUBLIC_USER_ID;
export default function Contact() {
    const form = useRef();
    const [texts] = useState({
        title: `<strong>Get in touch</strong> with me.`,
        subtitle: `Whether you have a question or simply want to say hello, I will do my best to respond to you asap.`
    });

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm(serviceId,templateId, form.current, userId )
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
                alert("An error occurred, please try again.");
            });

        e.target.reset();
    };

    return (
        <>
            <section id="section">
                <div className="content">
                    <h2 dangerouslySetInnerHTML={{ __html: texts.title }}></h2>
                    <p dangerouslySetInnerHTML={{ __html: texts.subtitle }}></p>
                </div>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="from_name" placeholder="Full name" required />
                        <input type="email" name="reply_to" placeholder="Email address" required />
                        <textarea name="message" placeholder="Your message" required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>

            <style jsx>{`
        section {
          padding: 4vw 5.103vw 2vw 10.317vw;
        }

        section .content {
          display: flex;
          flex-direction: column;
          margin-bottom: 2vw;
        }

        section .content h2 {
          font-family: Visby, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 3.43391vw;
          line-height: 122%;
          color: #2d3436;
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
          color: #2d3436;
          margin-bottom: 2.513vw;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #1c1e24;
          padding: 40px;
          border-radius: 8px;
          width: 100%;
          max-width: 600px;
          margin: auto;
        }

        .contact-form form {
          width: 100%;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 15px;
          margin-bottom: 15px;
          border: none;
          border-radius: 5px;
          background-color: #333;
          color: #fff;
          font-size: 16px;
          outline: none;
        }

        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
          color: #888;
        }

        .contact-form textarea {
          height: 150px;
          resize: none;
        }

        .contact-form button {
          width: 100%;
          padding: 15px;
          border: none;
          border-radius: 5px;
          background-color: #007bff;
          color: #fff;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .contact-form button:hover {
          background-color: #0056b3;
        }

        @media screen and (max-width: 992px) {
          section {
            padding: 35px 22px;
            margin-top: 2vh;
          }

          section .content {
            width: 100%;
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
      `}</style>
        </>
    );
}
