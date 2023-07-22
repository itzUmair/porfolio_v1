import { useState, useEffect } from "react";
import Menu from "../assets/menu_icon.svg";
import Close from "../assets/close_icon.svg";
import Logo from "../assets/logo.svg";
import { CSSTransition } from "react-transition-group";

import "../styles/Navbar.css";

const Navbar = ({ scrollToRef, aboutRef, projectsRef, contactRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setMenuOpen(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setMenuOpen(false);
      });
    };
  }, []);
  return (
    <nav className="navbar-container">
      <img
        src={Logo}
        alt="umair"
        className="logo"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      />
      {window.innerWidth > 768 && (
        <div className="nav-menu-container">
          <ul className="nav-menu">
            <li onClick={() => scrollToRef(aboutRef)}>About</li>
            <li onClick={() => scrollToRef(projectsRef)}>Projects</li>
            <li onClick={() => scrollToRef(contactRef)}>Contact</li>
          </ul>
        </div>
      )}
      {window.innerWidth <= 768 && (
        <CSSTransition
          in={menuOpen}
          unmountOnExit
          timeout={300}
          classNames="menu-primary"
        >
          <div className="mobile-nav-menu-container">
            <ul className="nav-menu">
              <li
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home
              </li>
              <li onClick={() => scrollToRef(aboutRef)}>About</li>
              <li onClick={() => scrollToRef(projectsRef)}>Projects</li>
              <li onClick={() => scrollToRef(contactRef)}>Contact</li>
            </ul>
          </div>
        </CSSTransition>
      )}
      <img
        src={menuOpen ? Close : Menu}
        alt="menu"
        onClick={() => setMenuOpen((prevState) => !prevState)}
        className="nav-button"
      />
    </nav>
  );
};

export default Navbar;
