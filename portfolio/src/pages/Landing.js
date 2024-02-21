import React, { useRef, useEffect } from 'react';
import SelectedWork from '../components/SelectedWork';
import Contact from '../components/Contact';
import { gsap } from 'gsap';


function Landing ({ modeToggle, pColor, handleNavigation}) {
    const landingRef = useRef(null)
    const headerRef = useRef(null)
    const workRef = useRef(null)


useEffect(() => { 
    const elements = headerRef.current.children 
    
    gsap.set()


    gsap.to ( {




    })

}, []); 


useEffect(() => {


gsap.set( {})


}, []); 


}

export default Landing;