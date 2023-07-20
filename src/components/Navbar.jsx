import { useState } from "react";
import Logo from "../assets/logo.svg";
import Menu from "../assets/hamburger.svg";
import Close from "../assets/close.svg";
import "../styles/Navbar.css";

const Navbar = ({
  scrollToRef,
  aboutRef,
  technologiesRef,
  projectsRef,
  contactRef,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar-container">
      <img
        src={Logo}
        alt="umair"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      />
      <div
        className={
          window.innerWidth <= 768 && menuOpen ? "overlay active" : "overlay"
        }
      ></div>
      {window.innerWidth <= 768 && (
        <div
          className={
            window.innerWidth <= 768 && menuOpen
              ? "nav-menu-container active"
              : "nav-menu-container"
          }
        >
          <ul className="nav-menu">
            <li onClick={() => scrollToRef(aboutRef)}>About</li>
            <li onClick={() => scrollToRef(technologiesRef)}>Technologies</li>
            <li onClick={() => scrollToRef(projectsRef)}>Projects</li>
            <li onClick={() => scrollToRef(contactRef)}>Contact</li>
          </ul>
        </div>
      )}
      {window.innerWidth > 768 && (
        <div className="nav-menu-container">
          <ul className="nav-menu">
            <li onClick={() => scrollToRef(aboutRef)}>About</li>
            <li onClick={() => scrollToRef(technologiesRef)}>Technologies</li>
            <li onClick={() => scrollToRef(projectsRef)}>Projects</li>
            <li onClick={() => scrollToRef(contactRef)}>Contact</li>
          </ul>
        </div>
      )}

      {window.innerWidth <= 768 && (
        <img
          src={menuOpen ? Close : Menu}
          alt="menu"
          onClick={() => setMenuOpen((prevState) => !prevState)}
          className="nav-button"
        />
      )}
    </nav>
  );
};

export default Navbar;
