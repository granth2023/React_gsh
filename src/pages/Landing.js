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

      const currentPhotoRef = photoRef.current;
      observer.observe(currentPhotoRef);

      return () => observer.unobserve(currentPhotoRef);
    }
  }, []);

  return (
    <div
  style={{ color: pColor }}
  className="mx-4 pt-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40"
>
  <div className="h-[80vh] flex flex-col justify-center items-center">
    <h3 className="pt-4 text-xs sm:text-4xl text-center font-gothic leading-tight">
      Welcome to Grant Seth Harris's portfolio.
    </h3>
  </div>
  <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-start lg:space-x-6">
    <div ref={landingRef} className="flex-1 flex justify-center">
      <img
        src={gshprofilepic}
        alt="Grant Seth Harris"
        className="w-3/4 h-auto max-w-xs rounded-full lg:max-w-sm lg:rounded-lg"
      />
    </div>
  </div>

      <SelectedWork
        pColor={pColor}
        handleNavigation={handleNavigation}
        modeToggle={modeToggle}
        photoRef={photoRef}
      />
      <Contact modeToggle={modeToggle} pColor={pColor} />
    </div>
  );
}

export default Landing;
