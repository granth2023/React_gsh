import React from "react";
import BgServices from "../components/BgServices.js";
import HamburgerNav from "../components/HamburgerNav.js";

const Credits = ({ handleNavigation }) => {
  const pdfPath = "/pdfs/grant_harris_resume.pdf";

  return (
    <div style={{ color: "#000" }}>
      <BgServices />
      <HamburgerNav handleNavigation={handleNavigation} />

      {/* Header */}
      <div className="text-center font-courier text-5xl sm:text-3xl md:text-6xl font-extrabold mt-20 mb-10 tracking-tight">
        credits
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 text-lg font-light space-y-10">
        {/* PDF Preview */}
        <div className="text-center space-y-4">
          <a href={pdfPath} target="_blank" rel="noopener noreferrer">
            <embed
              src={pdfPath + "#page=1&zoom=100"}
              type="application/pdf"
              width="100%"
              height="600px"
              className="shadow-lg border"
            />
          </a>
          <p className="text-xl">
            <a
              href={pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-500"
            >
              📄 Open Full Résumé (PDF)
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Credits;
