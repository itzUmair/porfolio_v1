import { useEffect, useState } from "react";
import { Loader, Navbar, Footer } from "./index.js";
import axios from "../api/axios.js";
import "../styles/ResumePage.css";

const ResumePage = () => {
  const [resumeURL, setResumeURL] = useState("");
  const [resumeJPG, setResumeJPG] = useState("");
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const getResume = async () => {
      const resume = await axios.get("getResume");
      setResumeURL(resume.data.pdf);
      setResumeJPG(resume.data.jgp);
      setLoading(false);
    };
    getResume();
  }, []);
  return (
    <div className="resume-container">
      {loading && <Loader message="fetching resume" />}
      <Navbar />
      {!loading && (
        <>
          <button onClick={() => window.open(resumeURL)}>Download PDF</button>
          <img
            src={resumeJPG}
            alt="resume"
            className="resume"
            onLoad={() => setImageLoaded(true)}
          />
          {imageLoaded && <Footer />}
        </>
      )}
    </div>
  );
};

export default ResumePage;
