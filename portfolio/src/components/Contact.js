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
        
        )