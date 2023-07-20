import Email from "../assets/email.svg";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linked-in.svg";
import AboutImage from "../assets/Wall-illustration.svg";
import "../styles/About.css";

const About = ({ aboutRef }) => {
  return (
    <section ref={aboutRef} className="about-section">
      <h2 className="page-title">About me</h2>
      <div>
        <p>
          Hey there! I&apos;m Muhammad Umair Khan, a Software Engineering
          student. I&apos;ve always been intrigued by how games and apps work,
          which led me to choose this field. During my research, I stumbled upon
          the fascinating world of web development. The more I dived into it,
          the more amazed I became by its endless possibilities.
        </p>
        <p>
          In the summer of 2019, I decided to take up web development as a
          hobby. Little did I know that it would quickly evolve into a true
          passion of mine. Now, I&apos;m wholeheartedly pursuing web development
          as my chosen profession, fueled by my unwavering enthusiasm and
          dedication.
        </p>
      </div>
      <h3 className="page-secondary-title">My socials</h3>
      <div className="social-container">
        <a
          href={`mailto:${"muhammadumair2511@gmail.com"}`}
          target="_blank"
          rel="noreferrer"
        >
          <img src={Email} alt="email" />
          muhammadumair2511@gmail.com
        </a>
        <a
          href="https://www.github.com/itzUmair"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Github} alt="email" />
          github.com/itzUmair
        </a>
        <a
          href="https://www.linkedin.com/in/umair2511"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Linkedin} alt="email" />
          linkedin.com/in/umair2511
        </a>
      </div>
    </section>
  );
};

export default About;
