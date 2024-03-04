import React, { useRef, useEffect, useState} from 'react';
// import { useNavigate } from 'react-router-dom'

import { gsap } from 'gsap'


function SelectedWork({ modeToggle, pColor, handleNavigation}){
        const workRef = useRef(null);
        const [isInView, setIsInView] = useState(false);
        const hasAnimated = useRef(false);

        useEffect(() => {
            const workRefCurrent = workRef.current
            const observer = new IntersectionObserver(([entry]) => {
                    setIsInView(entry.isIntersecting);
                },
                {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.5,
                }
                );

                if( workRefCurrent) {
                    observer.observe(workRef);
                }

                return () =>{
                    if (workRefCurrent) {
                        observer.unobserve(workRef);
                    }
                };
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
                            <h2 className="font-roadway font-bold text-lg sm:text-4xl">Featured Projects</h2>
                           
                         </div>
                         <ul className='font-gothic text-5xl sm:text-5xl' ref={workRef}>
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