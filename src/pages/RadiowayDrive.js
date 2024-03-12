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

    return (
        <div 
        ref={childrenRef} 
        style={{ color: pColor }} 
        className="flex flex-col mx-6 mt-20 pt-16 sm:px-20 md:px-32 lg:px-48 xl:px-64 2xl:px-80 ">
      <h2 className="text-7xl text-center sm:text-8xl  lg:text-8xl xl:text-9xl  font-gothic">Radioway Drive</h2>
      <h3 className="text-lg sm:text-5xl text-center font-gothic  font-bold italic mt-12">
        Change is coming to Deerkill Park!  
      </h3>
      <div className="flex justify-center mt-12">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={dkp2}
          alt="gpt poster"
        />
      </div>
      <h3 className="text-lg sm:text-4xl font-gothic font-bold mt-12">
        Logline
        </h3>
        <h4 className="text-lg sm:text-2xl font-roadway font-bold mt-12">
   The future of a northeastern suburban town is upended when one of its' local citizens is directed by his clairvoyant doppelganger to seize power. 
      </h4>
      <h3 className="text-lg sm:text-4xl font-gothic font-bold mt-12">
        Synopsis
        </h3>
        <h3 className="text-lg sm:text-4xl font-gothic font-bold mt-12">
        Dream Casting
        </h3>
        <h3 className="text-lg sm:text-4xl font-gothic font-bold mt-12">
        
        </h3>
        <button onClick ={handledocumentAccess}> click for sckript   </button>

        <h3 className="text-lg sm:text-4xl font-gothic font-bold mt-12">
        Creator's Note
        </h3>
        <h4 className="text-lg sm:text-2xl font-roadway font-bold mt-12">
   
      </h4>
      <div className="flex justify-center mt-20">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          alt="tur"
        //   src={crisol3}
        />
      </div>
      <div className="flex justify-center mt-20">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          alt="tur"
        //   src={crisol4}
        />
      </div>
      <div className="flex justify-center mt-20">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          alt="true"
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
export default radiowayDrive;