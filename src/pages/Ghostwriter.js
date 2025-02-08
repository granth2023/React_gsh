import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import { gsap } from "gsap";
//import { animateScroll as scroll } from "react-scroll";
import sideArrow from "../assests/sitesidearrow.svg"; // Ensure this path is correct

ReactModal.setAppElement("#root");

function Ghostwriter({ modeToggle, pColor, handleNavigation }) {
    useEffect(() => {
        // GSAP fade-in animation
        gsap.from(".fade-in", { opacity: 0, y: -20, duration: 1 });

        // Console log to debug
        console.log("GSAP animation triggered");
    }, []);

    // Smooth scroll to a section
    const scrollToSection = (id) => {
        gsap.to(window, { duration: 1, scrollTo: `#${id}` });
    };
    return (
        <div 
            className="relative w-full min-h-screen text-white"
            style={{ backgroundImage: "url('/path-to-image.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 w-full bg-opacity-80 backdrop-blur-lg bg-gray-900 text-white p-4 shadow-md z-50 flex justify-between items-center">
                <h1 className="text-xl font-bold tracking-wide">Ghostwriter</h1>
                <div className="space-x-6">
                    <Link to="/movie" className="hover:text-gray-300 transition">The Movie</Link>
                    <Link to="/timeline" className="hover:text-gray-300 transition">The Timeline</Link>
                </div>
            </nav>

            {/* Landing Content */}
            <div className="w-full h-screen flex flex-col items-center justify-center text-center fade-in">
                <h1 className="text-5xl font-bold">Ghostwriter</h1>
                <p className="mt-4 text-lg max-w-xl">
                    A writer overcomes writer's block. 
                </p>
                <img src={sideArrow} alt="Scroll Down" className="mt-6 w-8 h-8 animate-bounce cursor-pointer" onClick={() => scrollToSection("timeline")} />
            </div>

            {/* Timeline Section (Placeholder) */}
            <div id="timeline" className="w-full h-screen flex items-center justify-center bg-gray-800 text-white text-3xl">
                Timeline Section - Coming Soon!
            </div>
        </div>
    );
}

export default Ghostwriter;
