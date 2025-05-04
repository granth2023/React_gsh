import React from "react";

function Bg() {
  return (
    <div style={{ position: "relative", zIndex: -1 }}>
      <div
        id="gradientContainer"
        className="h-full w-full"
        style={{
          opacity: 1,
          transition: "ease-in-out all 0.4s",
          position: "fixed",
          backgroundColor: "#fffcc2", // light yellow background
        }}
      />
      <div
        id="overlayImageContainer"
        className="h-full w-full"
        style={{
          position: "fixed",
          background: "none", // transparent overlay (optional)
        }}
      />
    </div>
  );
}

export default Bg;


// import React, { useEffect } from "react";

// function Bg() {
//   // const [hues, setHues] = useState([
//   //   10, 28, 50, 75, 42, 30, 10, 18, 35, 55, 63, 70,
//   // ]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setHues((prevHues) =>
//         prevHues.map((hue) => {
//           if (hue < 75) return hue + 1;
//           if (hue === 75) return hue - 1;
//           if (hue > 0) return hue - 1;
//           if (hue === 0) return hue + 1;
//           return hue;
//         })
//       );
//     }, 55);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div style={{ position: "relative", zIndex: -1 }}>
//       <div
//         id="gradientContainer"
//         className="h-full w-full"
//         style={{
//           opacity: 1,
//           transition: "ease-in-out all 0.4s",
//           position: "fixed",
//           backgroundColor: "#fffcc2", // light yellow
//           //backgroundColor: `#93E9BE`, // Base white
//           // backgroundImage: `
//           //   radial-gradient(at 41% 50%, hsl(${hues[1] + 30}, 40%, 95%) 0px, transparent 50%),
//           //   radial-gradient(at 29% 33%, hsl(${hues[2] + 60}, 40%, 97%) 0px, transparent 50%),
//           //   radial-gradient(at 32% 74%, hsl(${hues[3] + 90}, 40%, 96%) 0px, transparent 50%),
//           //   radial-gradient(at 77% 40%, hsl(${hues[4] + 120}, 40%, 98%) 0px, transparent 50%),
//           //   radial-gradient(at 65% 69%, hsl(${hues[5] + 150}, 40%, 94%) 0px, transparent 50%)
//           // `,
//         }}
//       />
//       <div
//         id="overlayImageContainer"
//         className="h-full w-full"
//         style={{
//           position: "fixed",
//           background: "none", // no overlay
//         }}
//       />
//     </div>
//   );
// }

// export default Bg;
