import { useState, useEffect } from "react";
import TopArrow from "../assets/top_arrow.svg";
import { CSSTransition } from "react-transition-group";
import "../styles/About.css";

const About = ({ scrollToRef, projectsRef, aboutRef }) => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero-section");
      const heroSectionBottom =
        heroSection.offsetTop + heroSection.clientHeight;
      setShowScrollToTop(window.scrollY > heroSectionBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={aboutRef} className="about-section">
      <h2 className="page-title">About Me</h2>
      <div className="about-text">
        <p>
          Hey there! I&apos;m Muhammad Umair Khan, a Software Engineering
          student. I&apos;ve always been intrigued by how games and apps work,
          which led me to choose this field. During my research, I stumbled upon
          the fascinating world of web development. The more I dived into it,
          the more amazed I became by its endless possibilities.
        </p>
        <p>
          In the summer of 2019,decided to take up web development as a hobby.
          Little did I know that it would quickly evolve into a true passion of
          mine. Now, I&apos;m wholeheartedly pursuing web development as my
          chosen profession, fueled by my unwavering enthusiasm and dedication.
        </p>
        <button className="cta-button" onClick={() => scrollToRef(projectsRef)}>
          My Work
        </button>
      </div>
      <h2 className="page-title-secondary">Skills I Know</h2>
      <div className="skills-section">
        <div>
          <h3 className="page-subtitle">development</h3>
          <div className="skills">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="page-subtitle">Tools</h3>
          <div className="skills tools">
            <ul>
              <li>Git</li>
              <li>Github</li>
              <li>Vercel</li>
            </ul>
            <ul>
              <li>VS Code</li>
              <li>Netlify</li>
              <li>PyCharm</li>
            </ul>
          </div>
        </div>
      </div>
      <CSSTransition
        in={showScrollToTop}
        unmountOnExit
        timeout={300}
        classNames="stt-btn"
      >
        <button
          className="to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={TopArrow} alt="top" />
        </button>
      </CSSTransition>
    </section>
  );
};

export default About;
