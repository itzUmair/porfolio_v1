import HeroImage from "../assets/Programming-illustration.svg";
import ScrollAnimation from "../assets/scroll-animation.svg";
import UpIcon from "../assets/up.svg";

import "../styles/Hero.css";
const Hero = ({ scrollToRef, contactRef }) => {
  return (
    <>
      <section className="hero-section">
        <div className="left-side">
          <p className="greeting">Hi, I am</p>
          <h1 className="name">Muhammad Umair Khan.</h1>
          <h3 className="tagline">I build things for the web.</h3>
          <p className="intro">
            I am a software engineering student who is deeply passionate about
            web technologies. Initially, I started web development as a hobby,
            but now I am actively pursuing it as a profession.
          </p>
          <div className="hero-cta-container">
            <button
              onClick={() => scrollToRef(contactRef)}
              className="button-filled"
            >
              Contact Me
            </button>
            <button className="button-hollow">Resume</button>
          </div>
        </div>
        {/* {window.innerWidth > 1023 && (
          <div className="right-side">
            <img src={HeroImage} alt="hero image" />
          </div>
        )} */}
      </section>
      <div className="scroll-animation-container">
        <img src={ScrollAnimation} alt="" className="scroll-animation" />
      </div>
      <button
        className="scroll-to-top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <img src={UpIcon} alt="top" />
      </button>
    </>
  );
};

export default Hero;
