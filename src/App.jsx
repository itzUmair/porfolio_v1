import { useRef } from "react";
import {
  Navbar,
  Hero,
  About,
  Projects,
  Contact,
  Footer,
} from "./components/index.js";
import "./App.css";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref?.current?.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <main>
      <Navbar
        scrollToRef={scrollToRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Hero />
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </main>
  );
}

export default App;
