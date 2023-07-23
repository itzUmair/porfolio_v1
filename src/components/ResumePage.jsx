import { useEffect, useState, useRef } from "react";
import { Loader } from "./index.js";
import axios from "../api/axios.js";
import "../styles/ResumePage.css";

const ResumePage = () => {
  const [resumeURL, setResumeURL] = useState("");
  const [loading, setLoading] = useState(true);
  const [iframeLoading, setIframeLoading] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    const getResume = async () => {
      const resumeURL = await axios.get("getResume");
      setResumeURL(resumeURL.data.data);
      setLoading(false);
      setIframeLoading(true);
    };
    getResume();
  }, []);

  const handleIframeLoad = () => {
    setIframeLoading(false);
  };
  return (
    <div className="resume-container">
      {loading && <Loader message="fetching resume" />}
      {iframeLoading && <Loader message="getting things ready" />}
      {!loading && (
        <iframe
          src={resumeURL}
          width="100%"
          height="100%"
          title="Resume Viewer"
          ref={iframeRef}
          onLoad={handleIframeLoad}
        />
      )}
    </div>
  );
};

export default ResumePage;
