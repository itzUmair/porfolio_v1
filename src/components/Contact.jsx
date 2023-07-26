import { useState } from "react";
import Resume from "../assets/resume-icon.svg";
import Github from "../assets/github-logo.svg";
import Linkedin from "../assets/linkedin-logo.svg";
import Gmail from "../assets/gmail-logo.svg";
import "../styles/Contact.css";
import axios from "../api/axios";

const Contact = ({ contactRef }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage("Please fill out all fields.");
    } else if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
    } else if (!isValidName) {
      setErrorMessage("Please enter a valid name.");
    } else {
      try {
        const response = await axios.post("/addMessage", {
          name,
          email,
          message,
        });
        setErrorMessage(response.data.message);
      } catch (error) {
        setErrorMessage(error);
      }
      setName("");
      setEmail("");
      setMessage("");
      setErrorMessage("Message sent successfully!");
    }
  };

  return (
    <section ref={contactRef} className="contact-section">
      <div className="left-side">
        <h2 className="page-title">Contact Me</h2>
        <div className="contact-content">
          <p>
            Hello there! Thank you for visiting my portfolio website. Whether
            you have a project in mind, a collaboration proposal, or simply want
            to say hi, I&apos;d love to hear from you.
          </p>
          <p>
            Feel free to use the contact form to drop me a message. I&apos;ll do
            my best to get back to you as soon as possible.
          </p>
          <span>
            <p>Best regards,</p>
            <p>Muhammad Umair Khan</p>
          </span>
          <div className="contact-info-large-screen">
            <a href="/resume" target="_blank" rel="noreferrer">
              <img src={Resume} alt="resume" /> Resume
            </a>
            <a
              href="https://github.com/itzUmair"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Github} alt="github" /> github.com/itzUmair
            </a>
            <a
              href="https://linkedin.com/in/umair2511"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Linkedin} alt="linkedin" /> linkedin.com/in/umair2511
            </a>
            <a
              href={"mailto:muhammadumair2511@gmail.com"}
              target="_blank"
              rel="noreferrer"
            >
              <img src={Gmail} alt="Gmail" /> muhammadumair2511@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="right-side">
        <form>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleInputChange}
            maxLength="100"
            name="name"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleInputChange}
            maxLength="100"
            name="email"
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={handleInputChange}
            maxLength="200"
            name="message"
          />
          {errorMessage && <p>{errorMessage}</p>}
          <button type="submit" className="cta-button" onClick={handleSubmit}>
            Say Hi!
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
