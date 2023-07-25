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
  // const sttbtn = document.querySelector(".to-top");
  // const socialLinksContainer = document.querySelector(
  //   ".social-links-container"
  // );
  // const isScrollAtFooter = () => {
  //   const footer = document.querySelector("footer");
  //   if (!footer) return false;

  //   const scrollY = window.scrollY || window.pageYOffset;
  //   const windowHeight = window.innerHeight;
  //   const footerOffsetTop = footer.offsetTop;

  //   return scrollY + windowHeight >= footerOffsetTop;
  // };

  // window.addEventListener("scroll", () => {
  //   if (isScrollAtFooter()) {
  //     sttbtn.classList.add("site-end-bump");
  //     socialLinksContainer.classList.add("contact-info");
  //   } else {
  //     sttbtn.classList.remove("site-end-bump");
  //     socialLinksContainer.classList.remove("contact-info");
  //   }
  // });
  return (
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
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </main>
  );
}

export default App;
