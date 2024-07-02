import React from "react";
import "./styles.css";

export default function DownloadResume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/AbiodunOmonijoResume.pdf";
    link.download = "AbiodunOmonijoEuroCV.pdf";
    link.click();
  };
  return (
    <div>
      <button className="downloadBtn" onClick={handleDownload}>
        Download My Resume
      </button>
    </div>
  );
}
