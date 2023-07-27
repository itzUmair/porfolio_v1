import NotFound from "../assets/404.svg";
import "../styles/PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <img src={NotFound} alt="" />
      <h2>Looks like you got lost!</h2>
      <p className="current-url">
        You reached: {window.location.href}, which does not exist.
      </p>
      <p> Did you mean to visit:</p>
      <a href="https://muhammadumairkhan.vercel.app">
        muhammadumairkhan.vercel.app
      </a>
      <a href="https://muhammadumairkhan.vercel.app/resume">
        muhammadumairkhan.vercel.app/resume
      </a>
      <a href="https://muhammadumairkhan.vercel.app/projects">
        muhammadumairkhan.vercel.app/projects
      </a>
    </div>
  );
};

export default PageNotFound;
