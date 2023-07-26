import LoadAnimation from "../assets/loader.svg";
import "../styles/Loader.css";
const Loader = ({ message }) => {
  return (
    <div className="loader-container">
      <img src={LoadAnimation} />
      <p className="loading-message">{message}</p>
    </div>
  );
};

export default Loader;
