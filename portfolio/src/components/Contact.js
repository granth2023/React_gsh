import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';


function Contact({ modetoggle, pColor }) {
    const contactRef = useRef(null) 
    const [isInView, setIsInView] = useState(false)
    const hasAnimated = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting)
            },
            {
                root: null, 
                rootMargin: '0px',
                threshold: 0.5
            }
        )

        if (contactRef.current) {
            observer.observe(contactRef.current)
        }

        return () => { 
            if(contactRef.current) {
                observer.unobserve(contactRef.current)
            }
        }
    }, []);
        
        useEffect(() => {
            if (isInView && !hasAnimated.current) {
                const elements = contactRef.current.children 
                gsap.set(elements, { y:'-30%', autoAlpha: 0 })

                gsap.to(elements, {
                    y: '0%',
                    autoAlpha: 1,
                    stagger: 0.4,
                    duration: 1,
                    ease: 'power2.out',
                    overwrite: 'auto'
                })

                hasAnimated.current = true
            }
        }, [isInView])

        return ( 
            
        )
        })