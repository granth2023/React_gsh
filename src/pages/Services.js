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
<div className="text-center font-courier mt-20 mb-10 tracking-tight">
  <div className="text-5xl sm:text-3xl md:text-6xl font-extrabold">
    creative services
  </div>
  <div className="text-xl sm:text-lg md:text-2xl font-semibold italic mt-4">
    Building ideas into stories, stories into scripts, scripts into life
  </div>
</div>



      {/* Content Section */}
      <div
        ref={contentRef}
        className="max-w-4xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 text-lg font-light space-y-10"
      >
    
        {/* 🧭 Mission */}
 <div className="border-b pb-4" style={{ borderBottom: `1px solid ${pColor}` }}>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleExpand("mission")}
          >
            <h3 className="text-2xl font-semibold"> 🧭 Mission</h3>
            <span className="text-2xl font-bold">
              {expandedItems["mission"] ? "−" : "+"}
            </span>
          </div>
          {expandedItems["mission"] && (
            <div className="mt-4 space-y-4">
              <p className="text-xl leading-relaxed font-light tracking-wide">
              It’s simple: we serve your story.
No matter the medium or stage of the process, we continually ask: What best serves the story we’re trying to tell?

By putting the story first, we stay true to your core idea—guiding it toward its most honest, resonant, and fully realized form.
              </p>
             
            </div>
          )}
        </div>
 {/* 🫵 Who You Are */}
 <div className="border-b pb-4" style={{ borderBottom: `1px solid ${pColor}` }}>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleExpand("you")}
          >
            <h3 className="text-2xl font-semibold"> 🫵 Who You Are</h3>
            <span className="text-2xl font-bold">
              {expandedItems["you"] ? "−" : "+"}
            </span>
          </div>
          {expandedItems["you"] && (
            <div className="mt-4 space-y-4">
              <p className="text-xl leading-relaxed font-light tracking-wide">
              You’re someone who’s said, “That idea would make a great sketch or movie,” or “I should really turn that story into a script”—but for one reason or another, haven’t had the time, tools, or team to bring it to life.
              </p>
             
            </div>
          )}
        </div>
        {/* 🙋‍♂️ Who I Am */}
 <div className="border-b pb-4" style={{ borderBottom: `1px solid ${pColor}` }}>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleExpand("me")}
          >
            <h3 className="text-2xl font-semibold"> 🙋‍♂️ Who I Am</h3>
            <span className="text-2xl font-bold">
              {expandedItems["me"] ? "−" : "+"}
            </span>
          </div>
          {expandedItems["me"] && (
            <div className="mt-4 space-y-4">
              <p className="text-xl leading-relaxed font-light tracking-wide">
              I’m the missing link.
I’m a filmmaker who writes, directs, edits, and produces. I’ve written thousands of pages of scripts and directed/produced over 20 projects across sketch, film, television, and theater. I’ve edited countless hours of footage and know how to shape a story from the ground up.

Through all of it, I’ve learned to ask one key question:
What best serves the idea?

Together, we’ll take your idea and stay true to it—making thoughtful, story-first decisions at every turn to ensure your vision is realized in its most honest and fully formed version.
              </p>
             
            </div>
          )}
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
