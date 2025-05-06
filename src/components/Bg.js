import React from "react";

function Bg() {
  const backgroundStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    opacity: 1,
    backgroundImage: `
      radial-gradient(circle at center, #FFF8B0 93%, #B0C4DE 7%)
    `,
    backgroundColor: "#FFF8B0", // fallback in case gradient fails
  };

  return (
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
  );
}

export default Bg;



// import React from "react";

// function Bg() {
//   return (
//     <div style={{ position: "relative", zIndex: -1 }}>
//       <div
//         id="gradientContainer"
//         className="h-full w-full"
//         style={{
//           opacity: 1,
//           transition: "ease-in-out all 0.4s",
//           position: "fixed",
//           backgroundColor: "#FFEB3B",
//         }}
//       />
//       <div
//         id="overlayImageContainer"
//         className="h-full w-full"
//         style={{
//           position: "fixed",
//           background: "none", // transparent overlay (optional)
//         }}
//       />
//     </div>
//   );
// }

// export default Bg;


