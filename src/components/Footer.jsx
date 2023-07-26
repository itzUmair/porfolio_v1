import Copyright from "../assets/copyright-icon.svg";
import "../styles/Footer.css";
const Footer = () => {
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
