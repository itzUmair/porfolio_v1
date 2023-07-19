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
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
