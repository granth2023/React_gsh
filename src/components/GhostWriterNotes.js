import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import instagramQR from "../assests/turkeyrollpictures_qr.png";

function GhostWriterNotes({ pColor }) {
  const workRef = useRef(null);
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (key) => {
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  useEffect(() => {
    const element = workRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, []);

  const items = [
    {
      key: "credits",
      title: "Credits",
      description: `Holley: Holley Sorrells  
Writer/Director/Editor/Producer: Grant Harris  
Assistant Director: Leo Bowen  
Sound Mix: Kevin Shoemaker  
Special Thanks To: Sierra McAliney  
Ghostwriter: ???`,
    },
    {
      key: "why",
      title: "Why Ghostwriter (Director's Note)",
      description: `Where do ideas come from? 
      
      Recently, I’ve become fascinated with the notion ideas don’t come from within us, but rather exist ‘out there’. You could call it the world, the universe, the collective unconscious etc. I became so fascinated that I decided I wanted to explore it cinematically.

What is writer’s block? Is it an inability to conjure up an idea? Or could it be keeping a door closed that if we opened, would let ideas in? These are some of the questions I hope to raise in this movie and am curious to hear what you think the movie is saying about them.`,
    },
    {
      key: "how",
      title: "How Ghostwriter (Production Note)",
      description: `Before writing the movie, I came up with some arbitray production requirments: Tell a story that is shot in one day, on an iPhone, with one actor and no verbal dialogue. Within those confines, we made GHOSTWRITER!`,
    },
    {
      key: "contact",
      title: "Contact",
      isHtml: true,
      jsx: (
        <div className="space-y-4 text-xl sm:text-2xl">
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
            <div className="mt-2">
              <img
                src={instagramQR}
                alt="Instagram QR Code"
                className="w-32 h-32 sm:w-40 sm:h-40"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-40 lg:mt-64 px-4">
      <ul
        ref={workRef}
        className="font-courier tracking-tight space-y-10"
      >
        {items.map(({ key, title, description, isHtml, jsx }) => (
          <li
            key={key}
            style={{ borderBottom: `1px solid ${pColor}`, opacity: 0 }}
            className="pb-4 transition-all duration-500"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleExpand(key)}
            >
              <span className="text-xl sm:text-4xl font-bold text-left">
                {title}
              </span>
              <button className="text-2xl sm:text-3xl font-bold">
                {expandedItems[key] ? "−" : "+"}
              </button>
            </div>
            {expandedItems[key] && (
              <div className="mt-4 text-xl sm:text-2xl leading-snug text-left font-normal whitespace-pre-line">
                {isHtml ? jsx : description}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GhostWriterNotes;
