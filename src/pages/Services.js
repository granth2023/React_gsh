import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
//import AnimatedBackground from "../components/AnimatedBackground.js";


import HamburgerNav from "../components/HamburgerNav.js";
import BgServices from "../components/BgServices.js";
import instagramQR from "../assests/turkeyrollpictures_qr.png";

function Services({ pColor, modeToggle, handleNavigation }) {
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (key) => {
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  useEffect(() => {
    const animateIn = (el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    };

    if (headerRef.current) animateIn(headerRef.current);
    if (contentRef.current) animateIn(contentRef.current);
  }, []);

  return (
    <div className="text-xl sm:text-2xl leading-relaxed" style={{ color: pColor }}>


      <BgServices />
      <HamburgerNav handleNavigation={handleNavigation} />

      {/* Header */}
      <div
        ref={headerRef}
        className="text-center font-courier text-5xl sm:text-3xl md:text-6xl font-extrabold mt-20 mb-10 tracking-tight"
      >
        creative services
      </div>

      {/* Content Section */}
      <div
        ref={contentRef}
        className="max-w-4xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 text-lg font-light space-y-10"
      >
        {/* 🧭 Mission */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">🧭 Mission</h3>
          <p className="text-xl leading-relaxed font-light tracking-wide">
            It’s simple: serve the story. At every fork in the road, we ask what choice best serves the story you want told? By always putting the story first we ensure we stay true to your original core idea so    we can arrive at its truest, most fully realized form.
          </p>
        </div>

        {/* ✍️ Writing */}
        <div className="border-b pb-4" style={{ borderBottom: `1px solid ${pColor}` }}>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleExpand("writing")}
          >
            <h3 className="text-2xl font-semibold">✍️ Writing</h3>
            <span className="text-2xl font-bold">
              {expandedItems["writing"] ? "−" : "+"}
            </span>
          </div>
          {expandedItems["writing"] && (
            <div className="mt-4 space-y-4">
              <p className="text-xl leading-relaxed font-light tracking-wide">
              Using dynamic genre elements, strong characters, engaging narrative, and crisp dialogue, we build you scripts with solid foundations in any medium you need.
              </p>
              <a
                  href="/pdfs/sides.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block underline hover:text-blue-600"
              >
                📄 View Writing Sample (PDF)
              </a>
            </div>
          )}
        </div>
 {/* 🎬 Directing */}
 <div className="border-b pb-4" style={{ borderBottom: `1px solid ${pColor}` }}>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleExpand("directing")}
          >
            <h3 className="text-2xl font-semibold">🎬 Directing</h3>
            <span className="text-2xl font-bold">
              {expandedItems["directing"] ? "−" : "+"}
            </span>
          </div>
          {expandedItems["directing"] && (
            <div className="mt-4 space-y-4">
              <p className="text-xl leading-relaxed font-light tracking-wide">
              Through blocking, camera placement, improvisation, and action, we transform your script into a living, breathing world—one where actors can play and your story comes to life.

              </p>
              <div className="aspect-w-16 aspect-h-9">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/RzWF-6F-zLU?si=VVn6fbZN5RdgH2oP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          )}
        </div>

        {/* ✂️ Editing */}
        <div className="border-b pb-4" style={{ borderBottom: `1px solid ${pColor}` }}>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleExpand("editing")}
          >
            <h3 className="text-2xl font-semibold">✂️ Editing</h3>
            <span className="text-2xl font-bold">
              {expandedItems["editing"] ? "−" : "+"}
            </span>
          </div>
          {expandedItems["editing"] && (
            <div className="mt-4 space-y-4">
              <p className="text-xl leading-relaxed font-light tracking-wide">
              Cutting for story, pacing, subtext, performance, and effects, we shape your raw footage into finished cinema that feels intentional and alive.

              </p>
              <div className="aspect-w-16 aspect-h-9">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Fx_SjTv4-Ew?si=1jTYOc8d0O60p0iJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          )}
        </div>

        {/* 🎥 Producing */}
        <div className="border-b pb-4" style={{ borderBottom: `1px solid ${pColor}` }}>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleExpand("producing")}
          >
            <h3 className="text-2xl font-semibold">🎥 Producing</h3>
            <span className="text-2xl font-bold">
              {expandedItems["producing"] ? "−" : "+"}
            </span>
          </div>
          {expandedItems["producing"] && (
            <div className="mt-4 space-y-4">
              <p className="text-xl leading-relaxed font-light tracking-wide">
              From pre-production through final delivery, we handle logistics, budgets, and coordination—bringing your vision to life with clarity and care.
              </p>
              <a
                href="/pdfs/sidesshotlist.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block underline hover:text-blue-600"
              >
                📄 View Producing Sample (PDF)
              </a>
            </div>
          )}
        </div>

        {/* 📬 Contact */}
        <div className="mt-32 mb-32 text-left text-xl sm:text-2xl font-light space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold font-courier">📬 Contact: Let's talk turkey! </h2>

          <div>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:turkeyroll.grant@gmail.com"
              className="underline hover:text-blue-500"
            >
              turkeyroll.grant@gmail.com
            </a>
          </div>

          <div>
            <strong>YouTube:</strong>{" "}
            <a
              href="https://www.youtube.com/@TurkeyRollPictures"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-red-500"
            >
              @TurkeyRollPictures
            </a>
          </div>

          <div>
            <strong>Instagram:</strong>{" "}
            <a
              href="https://www.instagram.com/turkeyrollpictures/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-pink-500"
            >
              @turkeyrollpictures
            </a>
            <div className="mt-4">
              <img
                src={instagramQR}
                alt="Instagram QR Code"
                className="w-32 h-32 sm:w-40 sm:h-40"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
