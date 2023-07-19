import Logo from "../assets/logo.svg";
import Menu from "../assets/hamburger.svg";
import "../styles/Navbar.css";

const Navbar = ({
  scrollToRef,
  aboutRef,
  technologiesRef,
  projectsRef,
  contactRef,
}) => {
  return (
    <nav className="navbar-container">
      <img src={Logo} alt="umair" />
      {window.innerWidth >= 768 && (
        <ul className="nav-menu">
          <li onClick={() => scrollToRef(aboutRef)}>About</li>
          <li onClick={() => scrollToRef(technologiesRef)}>Technologies</li>
          <li onClick={() => scrollToRef(projectsRef)}>Projects</li>
          <li onClick={() => scrollToRef(contactRef)}>Contact</li>
        </ul>
      )}

      {window.innerWidth <= 768 && <img src={Menu} alt="menu" />}
    </nav>
  );
};

export default Navbar;
