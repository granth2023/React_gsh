
import React, { useEffect, useRef } from 'react'
// import ReactModal from 'react-modal'
// import { useNavigate } from 'react-router-dom'
import { ReactComponent as SideArrow } from '../assests/sitesidearrow.svg'
import { ReactComponent as SideArrow2 } from '../assests/sitesidearrow2.svg'
import rwd from '../assests/rwd.webp'

import { gsap } from 'gsap'

function RadiowayDrive ( { modeToggle, pColor, handleNavigation}) {
    const childrenRef = useRef(null)
    const documentUrl = 'https://gshportfolio.s3.us-east-2.amazonaws.com/Radio+Driveway.MP4'

    const handledocumentAccess = () => {
        
          window.open(documentUrl, '_blank')
        
      }

    useEffect(() => {
        const elements = childrenRef.current.children 
        gsap.set(elements, {y:30, autoAlpha: 0})

        gsap.to(elements, {
            y:0,
            autoAlpha: 1,
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
      <h2 className="text-7xl text-center sm:text-8xl  lg:text-8xl xl:text-9xl  font-SnellRoundhand-Bold">Radioway Drive</h2>
      <h3 className="text-lg sm:text-5xl text-center font-gothic  font-bold italic mt-12">
        Turrrrrnnnn!  
      </h3>
      <div className="flex justify-center mt-12">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={rwd}
          alt="gpt poster"
        />
      </div>
      <h3 className="text-lg sm:text-4xl font-gothic font-bold mt-12">
        Logline
        </h3>
        <h4 className="text-lg sm:text-2xl font-roadway font-bold mt-12">
        An AM radio host, a limo driver, her passengers and all their thoughts create this sonic conncoction.  
      </h4>
      <h3 className="text-lg sm:text-4xl font-gothic font-bold mt-12">
        Synopsis
        </h3>
        <h3 className="text-lg sm:text-4xl font-gothic font-bold mt-12">
         Credits
        </h3>
        <h3 className="text-lg sm:text-4xl font-gothic font-bold mt-12">
        
        </h3>
        <h3 className="text-lg sm:text-4xl font-gothic font-bold mt-12">
        <button onClick ={handledocumentAccess}> Download  </button>
        </h3>

        <h3 className="text-lg sm:text-4xl font-gothic font-bold mt-12">
        Creator's Note
        </h3>
        <h4 className="text-lg sm:text-2xl font-roadway font-bold mt-12">
        When I decided I wanted to create an audioplay, these were the ideas that eventually combined into Radioway Drive. There are several ideas here that I've always been fascinated with. The first is a radio talk show host for a couple reasons. One, as an idea I find it clever because they are forced to be expositional but in an effort to not be dramatically expositional it's a fun line to straddle. Second, I grew in cars hearing radio talk shows and it's alwways been a sound that's very familiar to me and a natural way to set a mood.  I've also always loved when music is controlled within a story itself and thought it would be fun to bring a manic energy to it where not only does our character toggle between different station but the audience is always tuned in and out of the minds of the people in the story. This project was also an experiment in 'filmmaking' process itself as the way the script was ordered wasn't exactly working right once I got into editing and after a prolonged series of test cases, I found an order that felt emotionally and logically exciting while keeping the original anxious energy that helped drive the writing process. 
   
      </h4>
      {/* <div className="flex justify-center mt-20">
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
      </div> */}
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
export default RadiowayDrive;