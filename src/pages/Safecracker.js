import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as SideArrow } from '../assests/sitesidearrow.svg'
import { ReactComponent as SideArrow2 } from '../assests/sitesidearrow2.svg'
import safecracker from '../assests/safecrackerposterAI.png'
//side arrow 

import { gsap } from 'gsap'

function Safecracker( { modeToggle, pColor, handleNavigation}) {
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
    //   <div 
    //   style={{ 
    //     backgroundImage: `url(${backgroundImage})`,
    //     backgroundSize: 'cover', 
    //     backgroundPosition: 'center center', 
    //     minHeight: '100vh',
    //   }}
    // > 
        <div 
        ref={childrenRef} 
        style={{ color: pColor }} 
        className="flex flex-col mx-6 mt-20 pt-16 sm:px-20 md:px-32 lg:px-48 xl:px-64 2xl:px-80 ">
      <h2 className="text-23xl text-center sm:text-8xl font-gothic">Safecracker </h2>
      <h4 className="text-lg text-center sm:text-5xl font-gothic italic font-bold mt-12">
      There's money IN these (Hollywood) hills! 
      </h4>
      <div className="flex justify-center mt-12">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={safecracker}
        />
      </div> 
      
      <h3 className="text-lg sm:text-4xl font-gothic font-bold mt-12">
        Logline
        </h3>
      <h4 className="text-lg sm:text-2xl font-roadway font-bold mt-12">
      Believed to only be an old Hollywood fairytale, the bank vault underneath the Hollywood sign becomes the location for the worlds greatest safecracker CHARACTERs and his crew's biggest and final score. Is the vault even real? How will they get in? Who owns it? And will they make it out alive? 
      </h4>
      <h3 className="text-lg sm:text-4xl font-gothic font-bold mt-12">
       Synopsis
        </h3>
      <h3 className="text-lg sm:text-4xl font-gothic font-bold mt-12">
        Dream Casting
        </h3>
      <h3 className="text-lg sm:text-4xl font-gothic font-bold mt-12">
        Writer's Note
        </h3>
      <h4 className="text-lg sm:text-2xl font-roadway font-bold mt-12">
      In March of 2023 I heard an episode of the Bill Simmons podcast where him and Sean Fennessey did a bit coming up with a heist movie they would love to see John Bernthal star in. Without their knowledge, I decided to take their 7 or so bullet points and use them as an outline for a spec script. 

      Here were there ideas: 
      * 
      * 
      * 
      *
      * 
      * 

      My big idea was that as someone from New Jersey striving for a career in the movies, I felt it was honest to make the crew from New Jersey and the L.A. bank be apart of the world of movies. 

      I probably would have never thought of it without their idea and heist movies are always an easy watch for me so it was nothing but a pleasure to write it. I loved stepping outside some of my normal genre conventions and write in a genre that I've long admired. 
      </h4>

      {/* <div className="flex justify-center mt-12">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
        //   src={crisol1}
        />
      </div> */}
      <p className="font-roadway mt-20 text-xs sm:text-sm lg:text-lg w-[80%]">
 
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
          <div onClick={() => handleNavigation('/wando')} className='flex cursor-pointer'>
          <h2>&emsp;Next</h2>
          {modeToggle ? <SideArrow2 className='h-10 mt-4 ml-2 rotate-180'/> : <SideArrow className='h-10 mt-4 ml-2 rotate-180'/>}
          </div>
        </div>
      </div>
    </div>
    // </div>
  )
}

   export default Safecracker 