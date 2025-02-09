import React, { useEffect, useRef } from "react";

import { Link } from "react-router-dom";


import ReactModal from "react-modal";
import { gsap } from "gsap";
//import { animateScroll as scroll } from "react-scroll";
import sideArrow from "../assests/sitesidearrow.svg"; // Ensure this path is correct

ReactModal.setAppElement("#root");

function Ghostwriter({ modeToggle, pColor, handleNavigation }) {
    const timelineRef = useRef(null);

    useEffect(() => {
        gsap.to(".timeline-step", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out"
        });
    }, []);
    

    // Smooth Scroll Function (Simplified)
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    // Timeline Milestones
    const milestones = [
        { id: "overview", label: "Overview" },
        { id: "idea", label: "The Idea" },
        { id: "script", label: "Writing the Script" },
        { id: "filming", label: "Filming" },
        { id: "editing", label: "Editing" },
        { id: "release", label: "Premiere" }
    ];

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
                    <Link to="/timeline" className="hover:text-gray-300 transition" onClick={() => scrollToSection("timeline")}>
                        The Timeline
                    </Link>
                </div>
            </nav>

            {/* Landing Content */}
            <div className="w-full h-screen flex flex-col items-center justify-center text-center fade-in">
                <h1 className="text-5xl font-bold">Welcome to Ghostwriter</h1>
                <p className="mt-4 text-lg text-gray-200">
                    A journey from an idea to the big screen. Scroll to explore the story.
                </p>
                <img 
                    src={sideArrow} 
                    alt="Scroll Down" 
                    className="mt-6 w-8 h-8 animate-bounce cursor-pointer" 
                    onClick={() => scrollToSection("timeline")} 
                />
            </div>

            {/* Timeline Section */}
            <div id="timeline" className="w-full min-h-screen flex flex-col items-center bg-gray-800 text-white py-20">
                <h2 className="text-4xl font-bold mb-8">Ghostwriter: Idea to Movie</h2>

                {/* Horizontal Timeline Bar */}
                <div className="flex justify-center items-center w-full overflow-x-auto py-6">
                    <div className="flex space-x-8 items-center">
                        {milestones.map((step, index) => (
                            <div key={step.id} className="flex flex-col items-center">
                                <button 
                                    className="w-6 h-6 bg-white rounded-full transition transform hover:scale-110"
                                    onClick={() => scrollToSection(step.id)}
                                ></button>
                                <p className="text-sm text-gray-300 mt-2">{step.label}</p>
                                {index < milestones.length - 1 && <div className="w-12 h-1 bg-white mt-3"></div>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Timeline Step 1 - Overview */}
                <div id="overview" ref={timelineRef} className="timeline-step relative flex flex-col items-center text-center w-3/4 md:w-1/2 p-6 bg-gray-900 rounded-lg border border-gray-500  shadow-lg">
    <h3 className="text-3xl font-semibold text-white">Overview of the Timeline</h3>
    <p className="mt-4 text-lg text-gray-300 bg-gray-700 p-4 rounded-md">
        This timeline charts my journey from an idea to a completed film. Each step will dive into the key milestones, challenges, and triumphs that shaped this project.
    </p>

    {/* Embedded Video */}
    <div className="mt-4 w-full max-w-xl">
        <iframe 
            className="w-full h-64 rounded-lg"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
            title="Overview Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    </div>

    {/* Connecting Line to Next Step */}
    <div className="w-1 h-16 bg-white my-6"></div>
                </div>
                {/* Timeline Step 2 - The Idea */}
<div id="idea" className="timeline-step relative flex flex-col items-center text-center w-3/4 md:w-1/2 p-6 bg-gray-900 rounded-lg border border-gray-500 shadow-lg">
    <h3 className="text-3xl font-semibold text-white">The Idea: Shoot an entire movie in one day with one actor!</h3>
    <p className="mt-4 text-lg text-gray-300 bg-gray-700 p-4 rounded-md">
        Great, now all I need is a movie idea that fits...
    </p>

    {/* Optionally Add an Image or Video */}
    {/* <img src="/path-to-image.jpg" alt="The Idea" className="mt-4 rounded-lg w-full max-w-md" /> */}
    
    {/* Connecting Line to Next Step */}
    <div className="w-1 h-16 bg-white my-6"></div>
</div>
{/* Timeline Step 2 - The Idea */}
<div id="idea" className="timeline-step relative flex flex-col items-center text-center w-3/4 md:w-1/2 p-6 bg-gray-900 rounded-lg border border-gray-500  shadow-lg">
    <h3 className="text-3xl font-semibold text-white">The Writing</h3>
    <p className="mt-4 text-lg text-gray-300 bg-gray-700 p-4 rounded-md">
       From first draft to shooting script
    </p>

    {/* Draft Links */}
    <div className="mt-4 flex flex-col items-center space-y-2">
        <a 
            href ="pdfs/ghostwriter1023.pdf"
            //href="/path-to-draft-1.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:text-blue-300 underline"
        >
            First Draft - The Initial Concept
        </a>
        
        <a 
            href="/path-to-draft-2.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:text-blue-300 underline"
        >
            Second Draft - Major Revisions
        </a>
        
        <a 
            href="/path-to-draft-3.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:text-blue-300 underline"
        >
            Final Shooting Script
        </a>
    </div>
    
    {/* Connecting Line to Next Step */}
    <div className="w-1 h-16 bg-white my-6"></div>
</div>
            </div>
        </div>
    );
}

export default Ghostwriter;