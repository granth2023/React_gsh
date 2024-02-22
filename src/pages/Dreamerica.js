import React. { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { gsap} from 'gsap';

function Dreamerica ({ modeToggle, pColor, handleNavigation}) {
    const navigate = useNavigate()
    const childrenRef = useRef(null)


    useEffect(() => {
        const elements = childrenRef.current.children 
        gsap.set(elements, { y:30, autoAlpha: 0 })

        gsap.to(elements, {
            y: 0,
            autoAlpha: 1,
            stagger: 0.4,
            duration: 1,
            ease: 'easeInOut',
            overwrite: 'auto'
        })
}, [])

return (

    </h2>
  <div className='flex flex-col font-higuen text-6xl mt-40 mb-40 justify center items-center leading-snug'>
    <div onClick={() => handleNavigation('/')} className='flex cursor-pointer'>
        {modeToggle ? (
        <SideArrow2 className="h-10 mt-4 mr-2"/>
    ) : (     
        <SideArrow className='h-10 mt-4 mr-2'/>
    )}
        <h2>Home&emsp;</h2>
    <div onClick={() => handleNavigation('/deerkillpark')} className='flex cursor-pointer'>
        <h2>&emsp;Next</h2>
        {modeToggle ? (
            <SideArrow2 className="h-10 mt-4 ml-2 rotate-180"/>
) : ( 
            <SideArrow className="h-10 mt-4 ml-2 rotate-180"/>
)}
            </div>
        </div>
    </div>
</div>
)
}

export default Dreamerica 