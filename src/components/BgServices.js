import React from "react";

function BgServices() {
  const backgroundStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    background: "linear-gradient(-45deg, #c9d6ff, #e2e2ff, #d4c1ec, #c9d6ff)",
    backgroundSize: "400% 400%",
    animation: "gradientShift 30s ease infinite",
  };

  return (
    <>
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
      <div style={{ position: "relative", zIndex: -1 }}>
        <div id="gradientContainer" className="h-full w-full" style={backgroundStyle} />
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
