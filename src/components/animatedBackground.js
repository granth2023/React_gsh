import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function AnimatedSymbolsBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const symbols = containerRef.current.querySelectorAll(".symbol");

    symbols.forEach((el, i) => {
      gsap.to(el, {
        x: "100vw",
        y: "100vh",
        repeat: -1,
        delay: i * 0.5,
        duration: 30,
        ease: "linear",
      });
    });
  }, []);

  const symbolCount = 10;
  const symbols = Array.from({ length: symbolCount }, (_, i) => (
    <div
      key={i}
      className="symbol absolute top-0 left-0 w-6 h-6 rounded-full bg-white opacity-10"
      style={{
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * -100}vw`, // start off screen
      }}
    />
  ));

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
    >
      {symbols}
    </div>
  );
}

export default AnimatedSymbolsBackground;
