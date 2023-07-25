import Copyright from "../assets/copyright-icon.svg";
import "../styles/Footer.css";
const Footer = () => {
  const sttbtn = document.querySelector(".to-top");
  const isScrollAtFooter = () => {
    const footer = document.querySelector("footer");
    if (!footer) return false; // Footer element not found, return false

    const scrollY = window.scrollY || window.pageYOffset; // Get the vertical scroll position
    const windowHeight = window.innerHeight; // Get the height of the viewport
    const footerOffsetTop = footer.offsetTop; // Get the distance from the top of the document to the top of the footer

    return scrollY + windowHeight >= footerOffsetTop;
  };

  window.addEventListener("scroll", () => {
    if (isScrollAtFooter()) {
      sttbtn.classList.add("site-end-bump");
    }
  });
  return (
    <footer className="primary-footer">
      <p>Designed & developed from scratch by Umair.</p>
      <p>
        <img src={Copyright} alt="copyright" /> 2023 Muhammad Umair Khan.
      </p>
      <p>All rights reserved.</p>
    </footer>
  );
};

export default Footer;
