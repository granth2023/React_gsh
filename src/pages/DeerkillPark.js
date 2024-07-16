import React, { useEffect, useRef } from "react";
import ReactModal from "react-modal";
import { ReactComponent as SideArrow } from "../assests/sitesidearrow.svg";
import { ReactComponent as SideArrow2 } from "../assests/sitesidearrow2.svg";
import dkp2 from "../assests/dkp2.webp";
import { gsap } from "gsap";

ReactModal.setAppElement("#root");

function Deerkillpark({ modeToggle, pColor, handleNavigation }) {
  const childrenRef = useRef(null);

  const documentUrl = "https://gshportfolio.s3.us-east-2.amazonaws.com/Deerkill+Park.pdf";

  const handledocumentAccess = () => {
    const password = prompt("Enter password");
    if (password === "correct") {
      window.open(documentUrl, "_blank");
    } else {
      alert("Invalid password");
    }
  };

  useEffect(() => {
    const elements = childrenRef.current.children;
    gsap.set(elements, { y: 30, autoAlpha: 0 });

    const animation = gsap.to(elements, {
      y: 0,
      autoAlpha: 1,
      stagger: 0.4,
      duration: 1,
      ease: "easeInOut",
      overwrite: "auto",
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div
      ref={childrenRef}
      style={{ color: pColor }}
      className="flex flex-col mx-6 mt-20 pt-16 sm:px-20 md:px-32 lg:px-48 xl:px-64 2xl:px-80 "
    >
      <h2 className="text-7xl text-center sm:text-8xl lg:text-8xl xl:text-9xl font-gothic">
        Deerkill Park
      </h2>
      <h3 className="text-lg sm:text-5xl text-center font-gothic font-bold italic mt-12">
        Change is coming to Deerkill Park!
      </h3>
      <div className="flex justify-center mt-12">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          src={dkp2}
          alt="Deerkill Park Poster"
        />
      </div>
      <h3 className="text-lg sm:text-4xl font-gothic font-bold mt-12">Teaser</h3>
      <h4 className="text-lg sm:text-2xl font-roadway font-bold mt-12">
        With his clairvoyant alter-ego telling him how to attain power through
        his dreams, a small town citizen and family become part of a troubling
        dark force that lives within their suburban paradise.
      </h4>
      <h3 className="text-lg sm:text-4xl font-gothic font-bold italic mt-12">
        Log from Deerkill Park September 19-26
      </h3>
      <h3 className="text-lg sm:text-4xl font-gothic font-bold mt-12">
        Log from Deerkill Park October - December
      </h3>
      <h3 className="text-lg sm:text-4xl font-gothic font-bold mt-12">
        {/* You can add more content here if needed */}
      </h3>
      <button onClick={handledocumentAccess}>Click for script</button>
      <h3 className="text-lg sm:text-4xl font-gothic font-bold mt-12">
        Creator's Note
      </h3>
      <h4 className="text-lg sm:text-2xl font-roadway font-bold mt-12">
        Deerkill Park started as a play based on some experiences and feelings
        from the town I grew up in. It wasn't until the end of the draft that I
        discovered the idea of the main character getting instructions from
        another version of himself and this was the basis for the pilot script.
        I love stories that to the audience seem like relatively small stakes,
        in this case a local town government, but to the character are
        everything. On its own I think this is a strong basis for comedy and
        when you combine it with the interiority of someone's mind and the
        forces that can only be seen in subconscious realms, you get a unique
        blend of the surreal mixed with satire. Suddenly, the small stakes the
        characters are playing out in, have an underbelly grounded in a deep
        darkness bigger than anything from our material world. The satirical is
        no longer funny because the characters care very much about stuff that
        isn't a huge deal but becomes frightening because of the forces behind
        their actions. What else are they capable of? What else do they want?
        Where is it all going?
      </h4>
      <div className="flex justify-center mt-20">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          alt="Placeholder"
        />
      </div>
      <div className="flex justify-center mt-20">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          alt="Placeholder"
        />
      </div>
      <div className="flex justify-center mt-20">
        <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          alt="Placeholder"
        />
      </div>
      <div>
        <div className="flex flex-col font-gothic text-6xl mt-40 mb-40 justify-center items-center leading-snug">
          <div onClick={() => handleNavigation("/")} className="flex cursor-pointer">
            {modeToggle ? (
              <SideArrow2 className="h-10 mt-4 mr-2" />
            ) : (
              <SideArrow className="h-10 mt-4 mr-2" />
            )}
            <h2>Home&emsp;</h2>
          </div>
          <div onClick={() => handleNavigation("/safecracker")} className="flex cursor-pointer">
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
  );
}

export default Deerkillpark;
