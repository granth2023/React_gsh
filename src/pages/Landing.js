import React, { useRef, useEffect } from 'react';
import SelectedWork from '../components/SelectedWork.js';
import Contact from '../components/Contact.js';
import downarrowImage from '../assests/downarrow.webp';

import { gsap } from 'gsap';


function Landing ({ modeToggle, pColor, handleNavigation}) {
    const landingRef = useRef(null)
    const headerRef = useRef(null)
    const workRef = useRef(null)


useEffect(() => { 
    const elements = headerRef.current.children 
    gsap.set(elements, {y:20, autoAlpha: 0})


    gsap.to(elements, {
        y:0,
        autoAlpha: 1,
        stagger:0.2,
        duration: 1,
        ease: 'easeInOut',
        overwrite: 'auto'
    })
}, []) 


useEffect(() => {
    const elements = landingRef.current.children
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {

                if(entry.isIntersecting) {
                gsap.to(entry.target, {
                    y: 0,
                    autoAlpha: 1,
                    stagger: 0.8,
                    duration: 1,
                    ease: 'easeInOut',
                    overwrite: 'auto'
            })
                observer.unobserve(entry.target)
            }
        })
        },
        {
            root: null, 
            rootMargin: '0px',
            threshold: 0.5
        }

    )


gsap.set(elements, {y: 20, autoAlpha: 0})

Array.from(elements).forEach((element) => {
    observer.observe(element)
})

return () => {
    Array.from(elements).forEach((element) => {
        observer.unobserve(element)
    })
}
}, []); 



return ( 
    <div 
        style = {{ color: pColor }} 
        className="mx-6 pt-10 sm:px-20 md:px-32 lg:px-48 xl:px-64 2xl:px-80"
    >
        <div> 
            <div 
                ref={headerRef}
                className="text-7xl sm:text-[10vh] lg:text-[17vh] text-center"
            >
                <h1 style={{ opacity: 0}} className="font-gothic">
                    g.s.h. <br>Grant Seth Harris</br>
                </h1>
                <h1 style={{ opacity: 0}} className="font-gothic">
                     
                </h1>
               
                <div style ={{ opacity: 0 }} className="flex justify-center">
                   
                    <div>
                        <h1 className="font-gothic"> </h1>
                    </div>
                    </div><div ref={landingRef}
                        style={{ opacity: 0 }}
                        className="flex text-center justify-center font-roadway pt-8 lg:pt-4 z-4 text-lg sm:text-6xl"
                    >
                        <div className='w-full'>
                        <div className="flex justify-center">
                        <div className="flex flex-col">
                        <div className="flex flex-col font-bold">
                    
                </div>
                        <p className=" pt-8 text-xs sm:text-4xl text-left font-roadway w-full sm:w-3/4 lg:w-5/6 mx-auto leading-loose">
                            Wow, I wasn't expecting you, come on in. Please don't mind the mess, can I get you a script? 
                        </p>
            </div>
                    {/* <div>
                        {modeToggle ?(
                            <img src={downarrowImage} className="animate-updown w-8 sm:w-9 2xl:w-10 mt-4 rounded-full"/>
                        ) :(
                            <img src={downarrowImage} className="animate-updown w-8 sm:w-9 2xl:w-10 mt-4 rounded-full"/>
                        )} 
                             
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <SelectedWork
        ref={workRef}
        pColor={pColor}
        handleNavigation={handleNavigation}
        modeToggle={modeToggle}
        ></SelectedWork>
        <Contact modeToggle={modeToggle} pColor={pColor}></Contact>
        </div>
)
                        }

export default Landing;