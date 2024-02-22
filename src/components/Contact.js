// import React, { useState, useEffect } from 'react';
// import { gsap } from 'gsap';


// function Contact({ modetoggle, pColor }) {
//     const contactRef = useRef(null) 
//     const [isInView, setIsInView] = useState(false)
//     const hasAnimated = useRef(false)

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 setIsInView(entry.isIntersecting)
//             },
//             {
//                 root: null, 
//                 rootMargin: '0px',
//                 threshold: 0.5
//             }
//         )

//         if (contactRef.current) {
//             observer.observe(contactRef.current)
//         }

//         return () => { 
//             if(contactRef.current) {
//                 observer.unobserve(contactRef.current)
//             }
//         }
//     }, []);
        
//         useEffect(() => {
//             if (isInView && !hasAnimated.current) {
//                 const elements = contactRef.current.children 
//                 gsap.set(elements, { y:'-30%', autoAlpha: 0 })

//                 gsap.to(elements, {
//                     y: '0%',
//                     autoAlpha: 1,
//                     stagger: 0.4,
//                     duration: 1,
//                     ease: 'power2.out',
//                     overwrite: 'auto'
//                 })

//                 hasAnimated.current = true
//             }
//         }, [isInView])

//         return ( 
//             <div className='mt-40 sm:mt-60 mb-20 lg:mb-40'>
//                 <div className="flex justify-between">
//                     <h2 className="font-aktiv font-bold text-lg sm:text-2xl">Contact Information</h2>
                    
//                 </div>
//                 <div
//                     ref={contactRef}
//                     className="flex flex-col mt-16 sm:mt-24 items-center font-higuen text-3xl sm:text-5xl"
//                 >
//                     <div style={{opacity: 0}} className="flex">
                        
                
//                     <a href="mailto:turkeyroll.grant@gmail.com">
//                         <h2 className="pb-2 cursor-pointer">Email</h2>
//                     </a>
                    
       
//                     </div>
//                     <div style={{opacity: 0}} className="flex mt-3 sm:mt-8">
                   
//                     </div>
//                     </div>


//                 </div>
            
//         )
//         }

// export default Contact 