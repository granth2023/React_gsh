import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

function SelectedWork({ pColor, handleNavigation, photoRef }) {
  const workRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = workRef.current;
    if (!element) {
      console.log("Element not found");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Element is in view:", entry.target);
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, []);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      const elements = workRef.current.children;
      gsap.set(elements, { x: "100%", autoAlpha: 0 });

      gsap.to(elements, {
        x: "0%",
        autoAlpha: 1,
        stagger: 0.3,
        duration: 0.6,
        ease: "power2.out",
        overwrite: "auto",
      });

      hasAnimated.current = true;
    }
  }, [isInView]);

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
  }, [photoRef]);

  return (
    <div className="mt-40 lg:mt-64">
      <div className="flex justify-between">
        <h2 className="font-gothic font-bold text-lg sm:text-8xl">
          Selected Work
        </h2>
      </div>
      <ul className="font-gothic font-bold text-5xl sm:text-5xl" ref={workRef}>
        <li
          onClick={() => handleNavigation("/deerkillpark")}
          style={{
            borderBottom: `1px solid ${pColor}`,
            opacity: 0,
          }}
          className="pb-2 mt-16 border-b-1 cursor-pointer"
        >
          Deerkill Park
          <span style={{ fontStyle: 'italic', fontSize: '0.75em' }}>
            (Psychological Mystery)
          </span>
        </li>
        <li
          onClick={() => handleNavigation("/safecracker")}
          style={{
            borderBottom: `1px solid ${pColor}`,
            opacity: 0,
          }}
          className="pb-2 mt-16 border-b-1 cursor-pointer"
        >
          Safecracker
          <span style={{ fontStyle: 'italic', fontSize: '0.75em' }}>
            (Spec Script Heist Film Based on Podcast)
          </span>
        </li>
        <li
          onClick={() => handleNavigation("/wando")}
          style={{
            borderBottom: `1px solid ${pColor}`,
            opacity: 0,
          }}
          className="pb-2 mt-16 border-b-1 cursor-pointer"
        >
          Wando, Slim, & The Light Within
          <span style={{ fontStyle: 'italic', fontSize: '0.75em' }}>
            (Psychological Animated Adventure)
          </span>
        </li>
        <li
          onClick={() => handleNavigation("/radiowaydrive")}
          style={{
            borderBottom: `1px solid ${pColor}`,
            opacity: 0,
          }}
          className="pb-2 mt-16 border-b-1 cursor-pointer"
        >
          Radioway Drive
          <span style={{ fontStyle: 'italic', fontSize: '0.75em' }}>
            (Psychological Thriller)
          </span>
          </li>
          <li>
          <p className="text-center mt-16 font-gothic font-bold text-5xl italic">
         A little about me: 
          <br />
          <br />
        I live in Brooklyn, originally am from New Jersey and I love movies. My favorite genre to write is
        psychological mysteries.
        <br />
        <br />
        I love movies by David Lynch, Stanley Kubrick, Steven Spielberg, and
        Paul Thomas Anderson. My favorite television shows are Twin Peaks, The
        Sopranos, Mad Men, Succession, and 30 Rock.
        <br />
        <br />
        My background is in filmmaking, theater, and long-form improv. I'm
        originally from New Jersey and went to the University of Miami,
        graduating in 2015.
        <br />
        <br />
        I also love baseball, music, and lately, cooking.
      </p>
        </li>
      </ul>
      
    </div>
  );
}

export default SelectedWork;
