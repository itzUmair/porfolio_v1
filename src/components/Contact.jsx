import { useState } from "react";
import "../styles/Contact.css";

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage("Please fill out all fields.");
    } else if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
    } else if (!isValidName) {
      setErrorMessage("Please enter a valid name.");
    } else {
      // Submit the form or send the data to your backend server
      // (Remember to use parameterized queries on the server-side to prevent SQL injections)
      // For this example, we'll just clear the form and show a success message:
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
