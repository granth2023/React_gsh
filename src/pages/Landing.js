import React, { useEffect, useRef } from "react";
//import SelectedWork from "../components/SelectedWork.js";
import GhostWriterNotes from "../components/GhostWriterNotes.js"
//import Contact from "../components/Contact.js";
// Ensure the correct path
//import turkeyrollpictures from "../assests/turkeyrollpictures.jpeg"

import { gsap } from "gsap";

function Landing({ modeToggle, pColor, handleNavigation }) {
  const landingRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    if (photoRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(entry.target, {
                y: 0,
                autoAlpha: 1,
                duration: 1,
                ease: "easeInOut",
                overwrite: "auto",
              });
            } else {
              gsap.to(entry.target, {
                y: 20,
                autoAlpha: 0,
                duration: 1,
                ease: "easeInOut",
                overwrite: "auto",
              });
            }
          });
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.1,
        }
      );

      const currentPhotoRef = photoRef.current;
      observer.observe(currentPhotoRef);

      return () => observer.unobserve(currentPhotoRef);
    }
  }, []);
  return (
    <div
      style={{ color: pColor }}
      
      //className="mx-4 pt-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40"
    >
      {/* 🆕 Header above the image */}
      <div className="text-center font-courier text-5xl sm:text-xl md:text-7xl font-extrabold mt-20 mb-10 tracking-tight">
    Turkey Roll Pictures Presents: <br />
    <span className="underline">GHOSTWRITER</span>
  </div>

      {/* <div className="text-center text-5xl sm:text-xl md:text-8xl font-extrabold mt-20 mb-10 tracking-tight">
GHOSTWRITER
</div> */}

  
      {/* Image section */}
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-start lg:space-x-6">
        <div
          ref={landingRef}
          className="flex-1 flex justify-center"
          style={{ marginBottom: "-1rem", marginTop: "5.75rem" }}
        >
          <div
  ref={photoRef}
  className="w-full max-w-xl sm:max-w-2xl md:max-w-5xl aspect-video rounded-lg overflow-hidden"
>
<div
  ref={photoRef}
  className="w-full max-w-xl sm:max-w-2xl md:max-w-5xl aspect-video rounded-lg overflow-hidden flex justify-center items-center"
>
<iframe width="560" height="315" src="https://www.youtube.com/embed/RzWF-6F-zLU?si=ptAwMbFGj0K1h3LB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

</div>

          {/* <img
            ref={photoRef}
            src={turkeyrollpictures}
            alt="Turkey Roll Pictures"
            className="w-full max-w-xl sm:max-w-2xl md:max-w-5xl h-auto rounded-full lg:rounded-lg"
          /> */}
        </div>
      </div>
  
      {/* Welcome Text */}
      {/* <div className="h-[80vh] flex flex-col justify-center items-center">
        <h3 className="pt-4 text-lg sm:text-5xl md:text-8xl text-center font-gothic leading-tight">
          Welcome to the home of Turkey Roll Pictures
        </h3>
      </div> */}
  <GhostWriterNotes 
   pColor={pColor}
   handleNavigation={handleNavigation}
   modeToggle={modeToggle}
   photoRef={photoRef}
   />

      {/* <SelectedWork
        pColor={pColor}
        handleNavigation={handleNavigation}
        modeToggle={modeToggle}
        photoRef={photoRef}
      /> */}
     {/* // <Contact modeToggle={modeToggle} pColor={pColor} /> */}
    </div>
  );
  
//   return (
//     <div
//   style={{ color: pColor }}
//   className="mx-4 pt-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40"
// >
// <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-start lg:space-x-6">
// <div ref={landingRef} className="flex-1 flex justify-center" style={{ marginBottom: "-1.00 rem", marginTop: "5.75rem" }}>

//       <img
//         src={turkeyrollpictures}
//         alt="Turkey Roll Pictures"
//         className="w-full max-w-xl sm:max-w-2xl md:max-w-5xl h-auto rounded-full lg:rounded-lg"

//       />
//     </div>
//   </div>
//   <div className="h-[80vh] flex flex-col justify-center items-center">
//   <h3 className="pt-4 text-lg sm:text-5xl md:text-8xl text-center font-gothic leading-tight">
//       Welcome to the home of Turkey Roll Pictures
//     </h3>
//   </div>


//       <SelectedWork
//         pColor={pColor}
//         handleNavigation={handleNavigation}
//         modeToggle={modeToggle}
//         photoRef={photoRef}
//       />
//       <Contact modeToggle={modeToggle} pColor={pColor} />
//     </div>
//   );
}

export default Landing;
