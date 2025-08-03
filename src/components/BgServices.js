import React from "react";

function BgServices() {
  const backgroundStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    background: "#87CEFA", // Initial color (sky blue)
    animation: "colorShift 12s ease-in-out infinite",
  };

  return (
    <>
      <style>
        {`
          @keyframes colorShift {
            0%   { background-color: #87CEFA; }  /* Sky Blue */
            25%  { background-color: #B0E0E6; }  /* Powder Blue */
            50%  { background-color: #D8BFD8; }  /* Thistle (Lilac) */
            75%  { background-color: #E6E6FA; }  /* Lavender */
            100% { background-color: #87CEFA; }  /* Back to Sky Blue */
          }
        `}
      </style>
      <div style={{ position: "relative", zIndex: -1 }}>
        <div
          id="gradientContainer"
          className="h-full w-full"
          style={backgroundStyle}
        />
        <div
          id="overlayImageContainer"
          className="h-full w-full"
          style={{
            position: "fixed",
            background: "none",
          }}
        />
      </div>
    </>
  );
}

export default BgServices;
