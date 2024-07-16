import React, { useEffect, useRef } from "react";
import SelectedWork from "../components/SelectedWork.js";
import Contact from "../components/Contact.js";
import gshprofilepic from "../assests/gshprofilepic.jpg"; // Ensure the correct path

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

      observer.observe(photoRef.current);

      return () => observer.unobserve(photoRef.current);
    }
  }, []);

  return (
    <div
      style={{ color: pColor }}
      className="mx-6 pt-10 sm:px-20 md:px-32 lg:px-48 xl:px-64 2xl:px-80"
    >
      <div className="h-screen flex flex-col justify-center items-center">
        <h3 className="pt-8 text-xs sm:text-6xl text-center font-gothic leading-loose">
          Welcome to Grant Seth Harris' portfolio.
        </h3>
      </div>
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-start lg:space-x-8">
        <div ref={landingRef} className="flex-1 flex justify-center">
          <img
            src={gshprofilepic}
            alt="Grant Seth Harris"
            className="w-full h-auto max-w-xs rounded-full lg:max-w-none lg:rounded-lg"
          />
        </div>
      </div>
      <SelectedWork
        pColor={pColor}
        handleNavigation={handleNavigation}
        modeToggle={modeToggle}
        photoRef={photoRef}
      ></SelectedWork>
      <Contact modeToggle={modeToggle} pColor={pColor}></Contact>
    </div>
  );
}

export default Landing;


// import React, { useEffect, useRef } from "react";
// import SelectedWork from "../components/SelectedWork.js";
// import Contact from "../components/Contact.js";
// import gshprofilepic from "../assests/gshprofilepic.jpg"; // Ensure the correct path

// import { gsap } from "gsap";

// function Landing({ modeToggle, pColor, handleNavigation }) {
//   const landingRef = useRef(null);
//   const headerRef = useRef(null);

//   useEffect(() => {
//     if (headerRef.current) {
//       const elements = headerRef.current.children;
//       gsap.set(elements, { y: 20, autoAlpha: 0 });

//       gsap.to(elements, {
//         y: 0,
//         autoAlpha: 1,
//         stagger: 0.2,
//         duration: 1,
//         ease: "easeInOut",
//         overwrite: "auto",
//       });
//     }
//   }, []);

//   useEffect(() => {
//     if (landingRef.current) {
//       const elements = landingRef.current.children;
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               gsap.to(entry.target, {
//                 y: 0,
//                 autoAlpha: 1,
//                 stagger: 0.8,
//                 duration: 1,
//                 ease: "easeInOut",
//                 overwrite: "auto",
//               });
//               observer.unobserve(entry.target);
//             }
//           });
//         },
//         {
//           root: null,
//           rootMargin: "0px",
//           threshold: 0.5,
//         }
//       );

//       gsap.set(elements, { y: 20, autoAlpha: 0 });

//       Array.from(elements).forEach((element) => {
//         observer.observe(element);
//       });

//       return () => {
//         Array.from(elements).forEach((element) => {
//           observer.unobserve(element);
//         });
//       };
//     }
//   }, []);

//   return (
//     <div
//       style={{ color: pColor }}
//       className="mx-6 pt-10 sm:px-20 md:px-32 lg:px-48 xl:px-64 2xl:px-80"
//     >
//       <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
//         <div className="flex-1 flex flex-col justify-center">
//           <h3 className="pt-8 text-xs sm:text-6xl text-center font-gothic w-full mx-auto leading-loose lg:text-left">
//             Welcome to Grant Seth Harris' portfolio. 
//           </h3>
//         </div>
//         <div ref={landingRef} className="flex-1 flex justify-center">
//           <img
//             src={gshprofilepic}
//             alt="Grant Seth Harris"
//             className="w-full h-auto max-w-xs rounded-full lg:max-w-none lg:rounded-lg"
//           />
//         </div>
//       </div>
//       <SelectedWork
//         pColor={pColor}
//         handleNavigation={handleNavigation}
//         modeToggle={modeToggle}
//       ></SelectedWork>
//       <Contact modeToggle={modeToggle} pColor={pColor}></Contact>
//     </div>
//   );
// }

// export default Landing;

