import { useRef, useState } from "react";
import {
  Navbar,
  Hero,
  About,
  Projects,
  Contact,
  Footer,
  LandingPageIntro,
} from "./components/index.js";
import { CSSTransition } from "react-transition-group";
import "./App.css";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [introAnimating, setIntroAnimating] = useState(true);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref?.current?.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <CSSTransition
        in={introAnimating}
        timeout={1000}
        classNames="intro"
        unmountOnExit
      >
        <LandingPageIntro setIntroAnimating={setIntroAnimating} />
      </CSSTransition>
      <CSSTransition
        in={!introAnimating}
        timeout={1000}
        classNames="primary-content"
        unmountOnExit
      >
        <main>
          <Navbar
            scrollToRef={scrollToRef}
            aboutRef={aboutRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
          />
          <Hero
            scrollToRef={scrollToRef}
            projectsRef={projectsRef}
            aboutRef={aboutRef}
          />
          <About
            scrollToRef={scrollToRef}
            projectsRef={projectsRef}
            aboutRef={aboutRef}
          />
          <Projects projectsRef={projectsRef} />
          <Contact contactRef={contactRef} />
          <Footer />
        </main>
      </CSSTransition>
    </>
  );
}

export default App;
