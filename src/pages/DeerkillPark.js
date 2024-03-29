import React, { useEffect, useRef } from 'react'
import ReactModal from 'react-modal'
// import { useNavigate } from 'react-router-dom'
import { ReactComponent as SideArrow } from '../assests/sitesidearrow.svg'
import { ReactComponent as SideArrow2 } from '../assests/sitesidearrow2.svg'
import dkp2 from '../assests/dkp2.webp'
//side arrow 

import { gsap } from 'gsap'

ReactModal.setAppElement('#root')

function Deerkillpark( { modeToggle, pColor, handleNavigation}) {
    // const navigate = useNavigate()
    const childrenRef = useRef(null)
    // const s3FileUrl = 'https://gshportfolio.s3.us-east-2.amazonaws.com/Deerkill+Park.pdf'

   
    const documentUrl = 'https://gshportfolio.s3.us-east-2.amazonaws.com/Deerkill+Park.pdf'

    const handledocumentAccess = () => {
      const password = prompt("enter password")
      if(password === "correct"){
        window.open(documentUrl, '_blank')
      } else {
        alert("invalid password")
      }
    }
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
          alt="gpt poster"
        />
      </div>
      <h3 className="text-lg sm:text-4xl font-gothic font-bold mt-12">
      Teaser
        </h3>
        <h4 className="text-lg sm:text-2xl font-roadway font-bold mt-12">
        With his clairveyoant alter-ego telling him how to attain power through his dreams, a small town citizen and family become part of a troubling dark force that lives within their suburban paradise. 
      </h4>
      <h3 className="text-lg sm:text-4xl font-gothic font-bold italic mt-12">
        Log from Deerkill Park september 19-26
        </h3>
        <h3 className="text-lg sm:text-4xl font-gothic font-bold mt-12">
        Log from Deerkill Park October - December 
        </h3>
        <h3 className="text-lg sm:text-4xl font-gothic font-bold mt-12">
        
        </h3>
        <button onClick ={handledocumentAccess}> click for sckript   </button>
        

        {/* <ReactModal 
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
      color: 'lightsteelblue',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '50%',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }
  }}
>
  {console.log("Rednering Modal Content")}
  <h2>Enter Password</h2>
  <input 
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
  />
  <button onClick={handlePasswordSubmit}>Submit</button>
  <button onClick={closeModal}>Cancel</button>
</ReactModal> */}
   {/* <div className="mt-12 text-center">
      
        <a href={s3FileUrl} target="_blank" rel="noopener noreferrer" className="text-lg sm:text-2xl font-roadway font-bold">
          View Document
        </a>
      </div> */}
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

   export default Deerkillpark 

   //TO DO:
   // update creator's note
   // add script
   //add synopsis
   //add dream casting
