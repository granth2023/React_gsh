import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';


function Contact({ modetoggle, pColor }) {
    const contactRef = useRef(null) 
    const [isInView, setIsInView] = useState(false)
    const hasAnimated = useRef(false)