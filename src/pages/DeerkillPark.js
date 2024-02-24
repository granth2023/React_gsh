import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as SideArrow } from '../assests/sitesidearrow.svg'
import { ReactComponent as SideArrow2 } from '../assests/sitesidearrow2.svg'
import dkp from '../assests/dkp.webp'
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
        <div 
        ref={childrenRef} 
        style={{ color: pColor }} 
        className="flex flex-col mx-6 mt-20 pt-16 sm:px-20 md:px-32 lg:px-48 xl:px-64 2xl:px-80 ">
      <h2 className="text-7xl text-center sm:text-8xl  lg:text-8xl xl:text-9xl  font-gothic">Deerkill Park</h2>
      <h3 className="text-lg sm:text-5xl text-center font-gothic  font-bold italic mt-12">
        Change is coming to Deerkill Park!  
      </h3>
      <div className="flex justify-center mt-12">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={dkp}
        />
      </div>
      <p className="font-roadway mt-20 text-xs sm:text-sm lg:text-lg w-[80%]">
   story
      </p>
      <div className="flex justify-center mt-20">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
        //   src={crisol3}
        />
      </div>
      <div className="flex justify-center mt-20">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
        //   src={crisol4}
        />
      </div>
      <div className="flex justify-center mt-20">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
        //   src={crisol2}
        />
      </div>
      <div>
        <div className='flex flex-col font-gothic text-6xl mt-40 mb-40 justify-center items-center leading-snug'>
          <div onClick={() => handleNavigation('/')} className='flex cursor-pointer'>
          {modeToggle ? <SideArrow2 className='h-10 mt-4 mr-2'/> : <SideArrow className='h-10 mt-4 mr-2'/>}
          <h2>Home&emsp;</h2>
          </div>
          <div onClick={() => handleNavigation('/safecracker')} className='flex cursor-pointer'>
          <h2>&emsp;Next</h2>
          {modeToggle ? <SideArrow2 className='h-10 mt-4 ml-2 rotate-180'/> : <SideArrow className='h-10 mt-4 ml-2 rotate-180'/>}
          </div>
        </div>
      </div>
    </div>
  )
}

   export default Deerkillpark 