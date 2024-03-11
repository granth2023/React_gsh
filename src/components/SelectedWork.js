import React, { useRef, useEffect, useState} from 'react';
// import { useNavigate } from 'react-router-dom'

import { gsap } from 'gsap'


function SelectedWork({  pColor, handleNavigation}){
        const workRef = useRef(null);
        const [isInView, setIsInView] = useState(false);
        const hasAnimated = useRef(false);
        useEffect(() => {
            const element = workRef.current; // This ensures you're working with the correct reference
            if (!element) {
                console.log("Element not found");
                return;
            }
        
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log('Element is in view:', entry.target);
                        setIsInView(true);
                    } else {
                        setIsInView(false);
                    }
                });
            }, {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            });
        
            observer.observe(element);
        
            // Cleanup function to unobserve the element when the component unmounts or the useEffect hook reruns
            return () => observer.unobserve(element);
        }, []);
    
    

                useEffect(() => {
                    if (isInView && !hasAnimated.current) {
                        const elements = workRef.current.children;
                        gsap.set(elements, { x: '100%', autoAlpha: 0 });

                        gsap.to(elements, { 
                            x: '0%',
                            autoAlpha: 1,
                            stagger: 0.3,
                            duration: 0.6,
                            ease: 'power2.out',
                            overwrite: 'auto',
                        });

                        hasAnimated.current = true;
                    }
                }, [isInView]);

        

                return ( 
                    <div className="mt-40 lg:mt-64">
                        <div className="flex justify-between"> 
                            <h2 className="font-gothic font-bold text-lg sm:text-8xl">Enter a Story</h2>
                           
                         </div>
                         <ul className='font-SnellRoundhand-Bold text-5xl sm:text-5xl' ref={workRef}>
                            <li 
                                onClick={() => handleNavigation('/dreamerica')}
                                style={{
                                    borderBottom: `1px solid ${pColor}`,
                                    opacity: 0 
                                }}
                                className=" pb-2 mt-16 border-b-1  cursor-pointer "
                            >
                                Dreamerica (Movie)
                            </li>
                            <li 
                                onClick ={() => handleNavigation('/deerkillpark')}
                                style={{
                                    borderBottom: `1px solid ${pColor}`,
                                    opacity: 0 
                                }}
                                className="pb-2 mt-16 border-b-1 cursor-pointer"
                            >
                                Deerkill Park (Television)
                            </li>
                            <li 
                                onClick ={() => handleNavigation('/safecracker')}
                                style={{
                                    borderBottom: `1px solid ${pColor}`,
                                    opacity: 0 
                                }}
                                className="pb-2 mt-16 border-b-1 cursor-pointer"
                            >
                                Safecracker (WIP)
                            </li>
                            <li 
                                onClick ={() => handleNavigation('/wando')}
                                style={{
                                    borderBottom: `1px solid ${pColor}`,
                                    opacity: 0 
                                }}
                                className="pb-2 mt-16 border-b-1 cursor-pointer"
                            >
                                Wando, Slim, The Light Within (WIP)
                            </li>
                            <li 
                                onClick ={() => handleNavigation('/sabrina')}
                                style={{
                                    borderBottom: `1px solid ${pColor}`,
                                    opacity: 0 
                                }}
                                className="pb-2 mt-16 border-b-1 cursor-pointer"
                            >
                               Sabrina (WIP)
                            </li>
                            <li 
                                onClick ={() => handleNavigation('/finishedworks')}
                                style={{
                                    borderBottom: `1px solid ${pColor}`,
                                    opacity: 0 
                                }}
                                className="pb-2 mt-16 border-b-1 cursor-pointer"
                            >
                                Finished Works ( 2 Items)
                            </li>
                            
                         </ul>
                    </div>
                )
}

export default SelectedWork; 