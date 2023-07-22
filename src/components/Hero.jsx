import { useEffect } from "react";
import "../styles/Hero.css";
const Hero = ({ scrollToRef, contactRef }) => {
  const moveBG = (e) => {
    let oldPos = { x: 0, y: 0 };
    let x = Math.round(e.offsetX * 0.1);
    let y = Math.round(e.offsetY * 0.1);

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
  return <section className="hero-section"></section>;
};

export default Hero;
