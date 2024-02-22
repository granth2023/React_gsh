import React, { useRef, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'

import { gsap } from 'gsap'
import userEvent from '@testing-library/user-event'

function SelectedWork({ modeToggle, pColor, handleItemClick}){
        const workRef = useRef(null);
        const [isInView, setIsInView] = useState(false);
        const hasAnimated = useRef(false);
        const navigate = useNavigate();

        useEffect(() => {
            const observer = new IntersectionObserver(([entry]) => {
                    setIsInView(entry.isIntersecting);
                },
                {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.5,
                }
                );

                if( workRef.current !== null) {
                    observer.observe(workRef.current);
                }

                return () =>{
                    if (workRef.current) {
                        observer.unobserve(workRef.current);
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

                const handleItemClick = (path) => {
                    navigate(path);
                }

                return ( 
                    <div className="mt-40 lg:mt-64">
                        <div className="flex justify-between"> 
                            <h2 className="font-aktiv font-bold text-lg sm:text-2xl">Selected Work</h2>
                           
                         </div>
                         <ul className='font-higuen text-3xl sm:text-5xl' ref={workRef}>
                            <li 
                                onClick={() => handleItemClick('/Americamp')}
                                style={{
                                    borderBottom: `1px solid ${pColor}`,
                                    opacity: 0 
                                }}
                                className=" pb-2 mt-16 border-b-1 cursor pointer"
                            >
                                Americamp (WIP)
                            </li>
                            <li 
                                onClick ={() => handleItemClick('/Deerkill Park')}
                                style={{
                                    borderBottom: `1px solid ${pColor}`,
                                    opacity: 0 
                                }}
                                className="pb-2 mt-16 border-b-1 cursor pointer"
                            >
                                Deerkill Park (WIP)
                            </li>
                            <li 
                                onClick ={() => handleItemClick('/Safecracker')}
                                style={{
                                    borderBottom: `1px solid ${pColor}`,
                                    opacity: 0 
                                }}
                                className="pb-2 mt-16 border-b-1 cursor pointer"
                            >
                                Safecracker (WIP)
                            </li>
                            <li 
                                onClick ={() => handleItemClick('/WandoSlimLightWithin')}
                                style={{
                                    borderBottom: `1px solid ${pColor}`,
                                    opacity: 0 
                                }}
                                className="pb-2 mt-16 border-b-1 cursor pointer"
                            >
                                Wando, Slim, The Light Within (WIP)
                            </li>
                         </ul>
                    </div>
                )
}

export default SelectedWork; 