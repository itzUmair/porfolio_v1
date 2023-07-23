import { useEffect } from "react";
import ScrollAnimation from "../assets/scroll-animation.svg";
import "../styles/Hero.css";
const Hero = ({ scrollToRef, contactRef }) => {
  const moveBG = (e) => {
    let oldPos = { x: 0, y: 0 };
    let x = Math.round(e.offsetX * 0.08);
    let y = Math.round(e.offsetY * 0.08);

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
    <section className="hero-section idle-animation">
      <div className="hero-data-container">
        <h3>Hi, my name is</h3>
        <h1>Muhammad Umair Khan</h1>
        <h2>
          I am a <span>fullstack web developer</span>
        </h2>
      </div>
      <div className="cta-container">
        <button className="cta-button">My Work</button>
        <button className="cta-button">Resume</button>
      </div>
      <img src={ScrollAnimation} alt="scroll" className="scrollAnimation" />
    </section>
  );
};

export default Hero;
