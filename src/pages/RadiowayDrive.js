import React from 'react'
import React, { useEffect, useRef } from 'react'
import ReactModal from 'react-modal'
// import { useNavigate } from 'react-router-dom'
import { ReactComponent as SideArrow } from '../assests/sitesidearrow.svg'
import { ReactComponent as SideArrow2 } from '../assests/sitesidearrow2.svg'

import { gsap } from 'gsap'

function radiowayDrive ( { modeToggle, pColor, handleNavigation}) {
    const childrenRef = useRef(null)
    const documentUrl = 'https://gshportfolio.s3.us-east-2.amazonaws.com/Radio+Driveway.MP4'

    useEffect(() => {
        const elements = childrenRef.current.children 
        gsap.set(elements, {y:30, autoAlpha: 0})

        gsap.to(elements, {
            y:0,
            autoalpha: 1,
            stagger: 0.4,
            duration: 1,
            ease: 'easeInOut',
            overwrite:'auto'
        })
    }, []) 

    
}