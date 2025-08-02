import React, { useEffect, useRef } from "react";
import GhostWriterNotes from "../components/GhostWriterNotes.js";
import { gsap } from "gsap";
import HamburgerNav from "../components/HamburgerNav.js";

// Inside your component's return:



function Landing({ modeToggle, pColor, handleNavigation }) {
  const landingRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    const el = photoRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 20 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    
    <div style={{ color: pColor }}>
        <HamburgerNav handleNavigation={handleNavigation} />
      {/* Header */}
      <div className="text-center font-courier text-5xl sm:text-xl md:text-7xl font-extrabold mt-20 mb-10 tracking-tight">
        Turkey Roll Pictures Presents TEST: <br />
        <span className="underline">GHOSTWRITER</span>
      </div>

      {/* Video Section */}
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-start lg:space-x-6">
        <div
          ref={landingRef}
          className="flex-1 flex justify-center"
          style={{ marginBottom: "-1rem", marginTop: "5.75rem" }}
        >
      <div className="w-full flex justify-center px-4 sm:px-6 md:px-8">
  <div
    className="relative w-full"
    style={{
      maxWidth: "1280px",
      aspectRatio: "16 / 9",
      minHeight: "200px", // Prevent collapsing on narrow screens
    }}
  >
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/RzWF-6F-zLU?si=w1ShCv8t9sTXjraW"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  </div>
</div>



        </div>
      </div>

      {/* Notes Section */}
      <GhostWriterNotes
        pColor={pColor}
        handleNavigation={handleNavigation}
        modeToggle={modeToggle}
        photoRef={photoRef}
      />
    </div>
  );
}

export default Landing;

// import React, { useEffect, useRef } from "react";
// //import SelectedWork from "../components/SelectedWork.js";
// import GhostWriterNotes from "../components/GhostWriterNotes.js"
// //import Contact from "../components/Contact.js";
// // Ensure the correct path
// //import turkeyrollpictures from "../assests/turkeyrollpictures.jpeg"

// import { gsap } from "gsap";

// function Landing({ modeToggle, pColor, handleNavigation }) {
//   const landingRef = useRef(null);
//   const photoRef = useRef(null);

//   useEffect(() => {
//     if (photoRef.current) {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               gsap.to(entry.target, {
//                 y: 0,
//                 autoAlpha: 1,
//                 duration: 1,
//                 ease: "easeInOut",
//                 overwrite: "auto",
//               });
//             } else {
//               gsap.to(entry.target, {
//                 y: 20,
//                 autoAlpha: 0,
//                 duration: 1,
//                 ease: "easeInOut",
//                 overwrite: "auto",
//               });
//             }
//           });
//         },
//         {
//           root: null,
//           rootMargin: "0px",
//           threshold: 0.1,
//         }
//       );

//       const currentPhotoRef = photoRef.current;
//       observer.observe(currentPhotoRef);

//       return () => observer.unobserve(currentPhotoRef);
//     }
//   }, []);
//   return (
//     <div
//       style={{ color: pColor }}
      
//       //className="mx-4 pt-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40"
//     >
//       {/* 🆕 Header above the image */}
//       <div className="text-center font-courier text-5xl sm:text-xl md:text-7xl font-extrabold mt-20 mb-10 tracking-tight">
//     Turkey Roll Pictures Presents: <br />
//     <span className="underline">GHOSTWRITER</span>
//   </div>

//       {/* <div className="text-center text-5xl sm:text-xl md:text-8xl font-extrabold mt-20 mb-10 tracking-tight">
// GHOSTWRITER
// </div> */}

  
//       {/* Image section */}
//       <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-start lg:space-x-6">
//         <div
//           ref={landingRef}
//           className="flex-1 flex justify-center"
//           style={{ marginBottom: "-1rem", marginTop: "5.75rem" }}
//         >
//    <div
//   ref={photoRef}
//   className="w-full px-4 sm:px-6 md:px-8 max-w-screen-xl mx-auto"
// >
//   <div className="relative w-full" style={{ paddingBottom: "56.25%", height: 0 }}>
//     <iframe
//       className="absolute top-0 left-0 w-full h-full"
//       src="https://www.youtube.com/embed/RzWF-6F-zLU?si=ptAwMbFGj0K1h3LB"
//       title="YouTube video player"
//       frameBorder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//       referrerPolicy="strict-origin-when-cross-origin"
//       allowFullScreen
//     />
//   </div>
// </div>




          
//         </div>
//       </div>
  
//   <GhostWriterNotes 
//    pColor={pColor}
//    handleNavigation={handleNavigation}
//    modeToggle={modeToggle}
//    photoRef={photoRef}
//    />

//       {/* <SelectedWork
//         pColor={pColor}
//         handleNavigation={handleNavigation}
//         modeToggle={modeToggle}
//         photoRef={photoRef}
//       /> */}
//      {/* // <Contact modeToggle={modeToggle} pColor={pColor} /> */}
//     </div>
//   );
  
// //   return (
// //     <div
// //   style={{ color: pColor }}
// //   className="mx-4 pt-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40"
// // >
// // <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-start lg:space-x-6">
// // <div ref={landingRef} className="flex-1 flex justify-center" style={{ marginBottom: "-1.00 rem", marginTop: "5.75rem" }}>

// //       <img
// //         src={turkeyrollpictures}
// //         alt="Turkey Roll Pictures"
// //         className="w-full max-w-xl sm:max-w-2xl md:max-w-5xl h-auto rounded-full lg:rounded-lg"

// //       />
// //     </div>
// //   </div>
// //   <div className="h-[80vh] flex flex-col justify-center items-center">
// //   <h3 className="pt-4 text-lg sm:text-5xl md:text-8xl text-center font-gothic leading-tight">
// //       Welcome to the home of Turkey Roll Pictures
// //     </h3>
// //   </div>


// //       <SelectedWork
// //         pColor={pColor}
// //         handleNavigation={handleNavigation}
// //         modeToggle={modeToggle}
// //         photoRef={photoRef}
// //       />
// //       <Contact modeToggle={modeToggle} pColor={pColor} />
// //     </div>
// //   );
// }

// export default Landing;
