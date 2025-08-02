import React, { useEffect, useRef } from "react";
//import SelectedWork from "../components/SelectedWork.js";
import Contact from "../components/Contact.js";
// Ensure the correct path
//import turkeyrollpictures from "../assests/turkeyrollpictures.jpeg"
import HamburgerNav from "../components/HamburgerNav.js";

import { gsap } from "gsap";

function GhostwriterLanding({ modeToggle, pColor, handleNavigation }) {
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
        <HamburgerNav handleNavigation={handleNavigation} />
      {/* 🆕 Header above the image */}
      <div className="text-center text-5xl sm:text-xl md:text-8xl font-extrabold mt-20 mb-10 tracking-tight">
     Ghostwriter
</div>

  
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
  <iframe
    width="100%"
    height="100%"
    src="https://youtu.be/RjpJp_h_bFo?si=piILCIXd4Qw_kIEO"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="w-full h-full"
  ></iframe>
</div>

          {/* <img
            ref={photoRef}
            //src={turkeyrollpictures}
            alt="Ghostwriter video"
            className="w-full max-w-xl sm:max-w-2xl md:max-w-5xl h-auto rounded-full lg:rounded-lg"
          /> */}
        </div>
      </div>
  
     
  
      {/* <SelectedWork
        pColor={pColor}
        handleNavigation={handleNavigation}
        modeToggle={modeToggle}
        photoRef={photoRef}
      /> */}
      <Contact modeToggle={modeToggle} pColor={pColor} />
    </div>
  );
  
}

export default GhostwriterLanding;
