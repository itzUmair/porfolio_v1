import { useState } from "react";
import "../styles/ResumePage.css";

const ResumePage = () => {
  return (
    <div className="resume-container">
      <iframe
        src={
          "https://firebasestorage.googleapis.com/v0/b/portfolio-b576f.appspot.com/o/Umair_CV%20(1).pdf?alt=media&token=63a6b067-8ad1-41eb-9d1a-7ba1867fd9d9"
        }
        width="100%"
        height="100%"
        title="PDF Viewer"
      />
    </div>
  );
};

export default ResumePage;
