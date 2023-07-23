import { useEffect, useState } from "react";
import { Loader } from "./index.js";
import axios from "../api/axios.js";
import "../styles/ResumePage.css";

const ResumePage = () => {
  const [resumeURL, setResumeURL] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getResume = async () => {
      const resumeURL = await axios.get("getResume");
      setLoading(false);
      setResumeURL(resumeURL.data.data);
    };
    getResume();
  }, []);
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div className="resume-container">
          <iframe
            src={resumeURL}
            width="100%"
            height="100%"
            title="PDF Viewer"
          />
        </div>
      )}
    </>
  );
};

export default ResumePage;
