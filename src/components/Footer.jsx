import { useEffect } from "react";
import Copyright from "../assets/copyright-icon.svg";
import "../styles/Footer.css";
const Footer = () => {
  useEffect(() => {
    const footer = document.querySelector("footer");
    const sttbtn = document.querySelector(".to-top");
    const socialLinksContainer = document.querySelector(
      ".social-links-container"
    );
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (!sttbtn || !socialLinksContainer) return;
        if (entry.isIntersecting) {
          sttbtn.classList.add("site-end-bump");
          socialLinksContainer.classList.add("contact-info");
        } else {
          sttbtn.classList.remove("site-end-bump");
          socialLinksContainer.classList.remove("contact-info");
        }
      });
    };

    const observerOptions = {
      root: null, // Use the viewport as the root element
      rootMargin: "0px", // No additional margin around the root
      threshold: 0.5, // At least 50% of the footer must be visible to trigger the callback
    };

    const footerObserver = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    footerObserver.observe(footer);
  }, []);

  return (
    <footer className="primary-footer">
      <p>Designed & developed from scratch by Umair.</p>
      <p>
        <img src={Copyright} alt="copyright" /> 2023 Muhammad Umair Khan.
      </p>
      <p>All rights reserved.</p>
    </footer>
  );
};

export default Footer;
