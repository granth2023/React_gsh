import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as SideArrow } from '../assests/sitesidearrow.svg'
import { ReactComponent as SideArrow2 } from '../assests/sitesidearrow2.svg'

// import MCCarousel from '../components/MCCarousel'
// import MCCouple from '../components/MCCouple'
import { gsap } from 'gsap'


function Dreamerica({ modeToggle, pColor, handleNavigation }) {
  const navigate = useNavigate()
  const childrenRef = useRef(null)

  useEffect(() => {
    const elements = childrenRef.current.children
    gsap.set(elements, { y: 30, autoAlpha: 0 }) // set initial position

    gsap.to(elements, {
      y: 0,
      autoAlpha: 1,
      stagger: 0.4, // delay between each child animation
      duration: 1, // animation duration
      ease: 'easeInOut', // easing function
      overwrite: 'auto'
    })
  }, [])

  return (
    <div
      ref={childrenRef}
      style={{ color: pColor }}
      className="flex flex-col mx-6 mt-20 pt-16 sm:px-20 md:px-32 lg:px-48 xl:px-64 2xl:px-80  "
    >
      <h2 className="text-5xl sm:text-8xl font-gothic">Dreamerica</h2>
      <h3 className="text-lg sm:text-2xl font-roadway font-bold mt-12">
        Movie <br/> 
       Surreal, Psychological
      </h3>
      <p className="font-roadway text-xs sm:text-sm lg:text-lg w-[80%] mt-6">
        Story
      </p>
      <div className='flex justify-center'>
      {/* <MCCarousel pColor={pColor}></MCCarousel> */}
      </div>
      <p className="font-roadway mt-20 text-xs sm:text-sm lg:text-lg w-[80%]">
        story
      </p>
      <div className='sm:grid sm:grid-cols-2 gap-x-4 mt-20'>
        {/* <MCCouple className={'mt-12'} pColor={pColor} />
        <MCCouple
          className={'translate-x-10'}
          pColor={pColor}
      
        />
        <MCCouple pColor={pColor}  />
        <MCCouple
          className={'translate-x-10'}
          pColor={pColor}
      
        /> */}
      </div>
      <div>
        <h2
          style={{
            borderBottom: `1px solid ${pColor}`
          }}
          className="font-gothic text-3xl pb-2 mt-16 border-b-1 cursor-pointer "
        >
          {/* <a href="https://metalcoat.xyz/">Visit the site</a> */}
        </h2>
        <div className="flex flex-col font-gothic text-6xl mt-40 mb-40 justify-center items-center leading-snug">
          <div onClick={() => handleNavigation('/')} className="flex cursor-pointer">
            {modeToggle ? (
              <SideArrow className="h-10 mt-4 mr-2" />
            ) : (
              <SideArrow2 className="h-10 mt-4 mr-2" />
            )}
            <h2>Home&emsp;</h2>
          </div>
          <div onClick={() => handleNavigation('/deerkillpark')} className="flex cursor-pointer">
            <h2>&emsp;Next</h2>
            {modeToggle ? (
              <SideArrow2 className="h-10 mt-4 ml-2 rotate-180" />
            ) : (
              <SideArrow className="h-10 mt-4 ml-2 rotate-180" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dreamerica