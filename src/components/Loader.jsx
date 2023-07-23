import "../styles/Loader.css";
const Loader = ({ message }) => {
  return (
    <div className="loader-container">
      {/*<img /> TODO: add a loader svg with animations*/}
      <p className="loading-message">{message}</p>
    </div>
  );
};

export default Loader;
