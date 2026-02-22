import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import SectionHeading from "../SectionHeading";

const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const userId = process.env.NEXT_PUBLIC_USER_ID;

const RATE_LIMIT_MS = 60 * 1000; // 1 minute between submissions

export default function Contact() {
    const form = useRef();
    const lastSubmitTime = useRef(0);
    const [submitting, setSubmitting] = useState(false);

    const title = `<strong>Get in touch</strong>`;
    const subtitle = `Whether you have a question or simply want to say hello, I will do my best to respond to you asap.`;

    const sendEmail = (e) => {
        e.preventDefault();

        // Honeypot check – bots fill hidden fields, humans don't
        if (form.current._hp && form.current._hp.value) return;

        // Client-side rate limiting
        const now = Date.now();
        if (now - lastSubmitTime.current < RATE_LIMIT_MS) {
            alert("Please wait a moment before sending another message.");
            return;
        }

        setSubmitting(true);
        lastSubmitTime.current = now;

        emailjs.sendForm(serviceId, templateId, form.current, userId)
            .then(() => {
                alert("Message sent successfully!");
                e.target.reset();
            }, () => {
                alert("An error occurred, please try again.");
            })
            .finally(() => setSubmitting(false));
    };

    return (
        <>
            <section id="contact">
                <div className="content">
                    <SectionHeading title={title} />
                    <p className="subtitle">{subtitle}</p>
                </div>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        {/* Honeypot field – hidden from real users, bots fill it */}
                        <input
                            type="text"
                            name="_hp"
                            style={{ display: "none" }}
                            tabIndex="-1"
                            autoComplete="off"
                            aria-hidden="true"
                        />
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="from_name" placeholder="Enter your name" required />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="reply_to" placeholder="Enter your email address" required />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea name="message" placeholder="Write your message here..." required></textarea>
                        </div>
                        <button type="submit" disabled={submitting}>
                            {submitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </section>

            <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
        }

        section .content {
          display: flex;
          flex-direction: column;
          margin-bottom: 2rem;
          width: 100%;
          text-align: left;
        }

        .subtitle {
          font-family: Quicksand, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
          font-style: normal;
          font-weight: 300;
          font-size: 1.2rem;
          line-height: 140%;
          color: #dfe6e9;
          margin-bottom: 1.5rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #1e272e;
          padding: 40px;
          border-radius: 12px;
          width: 100%;
          max-width: 700px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          border: 1px solid #2d3436;
        }

        .contact-form form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .form-group label {
            color: #dfe6e9;
            font-family: Quicksand, sans-serif;
            font-size: 0.9rem;
            font-weight: 500;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 15px;
          border: 1px solid #2d3436;
          border-radius: 8px;
          background-color: #2d3436;
          color: #fff;
          font-size: 16px;
          outline: none;
          font-family: Quicksand, sans-serif;
          transition: border-color 0.3s ease;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
            border-color: #0984e3;
        }

        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
          color: #636e72;
        }

        .contact-form textarea {
          height: 150px;
          resize: vertical;
        }

        .contact-form button {
          width: 100%;
          padding: 15px;
          border: none;
          border-radius: 8px;
          background-color: #0984e3;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: Quicksand, sans-serif;
          margin-top: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .contact-form button:hover {
          background-color: #0070f3;
          box-shadow: 0 4px 15px rgba(9, 132, 227, 0.4);
        }

        .contact-form button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media screen and (max-width: 992px) {
          .contact-form {
              padding: 25px;
          }
        }
      `}</style>
      <style jsx global>{`
        #contact strong {
            font-weight: 500;
        }
      `}</style>
        </>
    );
}
