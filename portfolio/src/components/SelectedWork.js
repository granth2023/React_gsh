import React, { useRef, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'
// import { ReactComponent as SiteHyphen } from 'assests' 
import { gsap } from 'gsap'
import userEvent from '@testing-library/user-event'

function SelectedWork({ modeToggle, pColor, handleNavgiation}){
        const workRef = useRef(null);
        const [isInView, setIsInView] = useState(false);
        const hasAnimated = useRef(false);

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry] => {
                    setIsInView(entry.isIntersecting);
                },
                {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.5,
                }
                );

                if( workRef.current) {
                    observer.observe(workRef.current);
                }
                
            )
        })
}