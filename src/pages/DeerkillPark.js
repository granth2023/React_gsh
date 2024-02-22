import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
//side arrow 

import { gsap } from 'gsap'

function Deerkillpark( { modeToggle, pColor, handleNavigation}) {
    const navigate = useNavigate()
    const childrenRef = useRef(null)

    useEffect(() => {
        const elements = childrenRef.current.children 
        gsap.set(elements, { y:30, autoAlpha: 0})

        gsap.to(elements, {
            y: 0,
            autoAlpha: 1,
            stagger: 0.4,
            duration: 1,
            ease: 'easeInOut',
            overwrite: 'auto',
        })
    }, [])

    return (
        
    )
}