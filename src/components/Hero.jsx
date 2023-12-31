import { useEffect } from "react";
import ScrollAnimation from "../assets/scroll-animation.svg";
import Resume from "../assets/resume-icon.svg";
import Github from "../assets/github-logo.svg";
import Linkedin from "../assets/linkedin-logo.svg";
import Gmail from "../assets/gmail-logo.svg";

import "../styles/Hero.css";
const Hero = ({ scrollToRef, projectsRef, aboutRef }) => {
  useEffect(() => {
    const footer = document.querySelector("footer");
    const socialLinksContainer = document.querySelector(
      ".social-links-container"
    );
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          socialLinksContainer.classList.add("contact-info");
        } else {
          socialLinksContainer.classList.remove("contact-info");
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const footerObserver = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    footerObserver.observe(footer);
  }, []);
  const moveBG = (e) => {
    let oldPos = { x: 0, y: 0 };
    let x = Math.round(e.offsetX * 0.08);
    let y = Math.round(e.offsetY * 0.15);

    const heroSection = document.querySelector(".hero-section");
    setTimeout(() => {
      heroSection.style.backgroundPosition = `${oldPos.x}px ${oldPos.y}px`;
    }, 100);
    oldPos.x = x;
    oldPos.y = y;
  };
  useEffect(() => {
    window.addEventListener("mousemove", moveBG);
    return () => window.removeEventListener("mousemove", moveBG);
  });

  return (
    <section className="hero-section">
      <div className="hero-data-container">
        <h3>Hi, my name is</h3>
        <h1>Muhammad Umair Khan</h1>
        <h2>
          I am a <span>fullstack web developer</span>
        </h2>
      </div>
      <div className="cta-container">
        <button className="cta-button" onClick={() => scrollToRef(projectsRef)}>
          My Work
        </button>
        <button
          className="cta-button"
          onClick={() => window.open("/resume", "_blank")}
        >
          Resume
        </button>
      </div>
      <img
        src={ScrollAnimation}
        alt="scroll"
        className="scrollAnimation"
        onClick={() => scrollToRef(aboutRef)}
      />
      <div className="social-links-container">
        <a
          href="/resume"
          target="_blank"
          rel="noreferrer"
          data-title="Resume"
          data-info="Resume"
        >
          <img src={Resume} alt="resume" />
        </a>
        <a
          href="https://github.com/itzUmair"
          target="_blank"
          rel="noreferrer"
          data-title="Github"
          data-info="github.com/itsUmair"
        >
          <img src={Github} alt="github" />
        </a>
        <a
          href="https://linkedin.com/in/umair2511"
          target="_blank"
          rel="noreferrer"
          data-title="LinkedIn"
          data-info="linkedin.com/in/umair2511"
        >
          <img src={Linkedin} alt="linkedin" />
        </a>
        <a
          href={"mailto:muhammadumair2511@gmail.com"}
          target="_blank"
          rel="noreferrer"
          data-title="Gmail"
          data-info="muhammadumair2511@gmail.com"
        >
          <img src={Gmail} alt="Gmail" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
