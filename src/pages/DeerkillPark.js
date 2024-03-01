import React, { useEffect, useRef , useState } from 'react'
import ReactModal from 'react-modal'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as SideArrow } from '../assests/sitesidearrow.svg'
import { ReactComponent as SideArrow2 } from '../assests/sitesidearrow2.svg'
import dkp2 from '../assests/dkp2.webp'
//side arrow 

import { gsap } from 'gsap'

ReactModal.setAppElement('#root')

function Deerkillpark( { modeToggle, pColor, handleNavigation}) {
    const navigate = useNavigate()
    const childrenRef = useRef(null)
    // const s3FileUrl = 'https://gshportfolio.s3.us-east-2.amazonaws.com/Deerkill+Park.pdf'

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [password, setPassword] = useState('');
    const [documentUrl, setDocumentUrl] = useState('https://gshportfolio.s3.us-east-2.amazonaws.com/Deerkill+Park.pdf')

    const openModal = () => {
      setModalIsOpen(true);
    };

    const closeModal = () => {
      setModalIsOpen(false);
      setPassword('dkp');

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
          src={dkp2}
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

        <div className="mt-12 text-center">
        <a href={s3FileUrl} target="_blank" rel="noopener noreferrer" className="text-lg sm:text-2xl font-roadway font-bold">
          View Document
        </a>
      </div>
        <h3 className="text-lg sm:text-4xl font-gothic font-bold mt-12">
        Creator's Note
        </h3>
        <h4 className="text-lg sm:text-2xl font-roadway font-bold mt-12">
   Deerkill Park started as a play based on some experiences and feelings from the town I grew up in. It wasn't until the end of the draft that I discovered the idea of main character getting instructions from another version of himself and this was the basis for the pilot script. I love stories that to the audience seem like relatively small stakes, in this case a local town govnerment, but to the character are everything. On its own I think this is a strong basis for comedy and when you combine it with the  interiority of someones mind and the forces that can only be seen in subconscious realms, you get a unique blend of the surreal mixed with satire. Suddenly, the small stakes the characters are playing out in, have an underbelly groudned in a deep darkness bigger than anything from our material world. The satirical is no longer funny because the characters care very much about stuff that isn't a huge deal but become frightening because of the forces behind their actions. What else are they capabale of? What else do they want? Where is it all going? 
      </h4>
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

   //TO DO:
   // update creator's note
   // add script
   //add synopsis
   //add dream casting
   