import { useRef } from "react";
import {
  Navbar,
  Hero,
  About,
  Technologies,
  Projects,
  Contact,
  Footer,
} from "./components/index.js";
import "./App.css";

function App() {
  const aboutRef = useRef(null);
  const technologiesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <main>
      <Navbar
        scrollToRef={scrollToRef}
        // aboutRef={aboutRef}
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
