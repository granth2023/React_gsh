import React, { useEffect, useRef } from "react";
import { ReactComponent as SideArrow } from "../assests/sitesidearrow.svg";
import { ReactComponent as SideArrow2 } from "../assests/sitesidearrow2.svg";
import { gsap } from "gsap";

function Wando({ modeToggle, pColor, handleNavigation }) {
  const childrenRef = useRef(null);

  useEffect(() => {
    const elements = childrenRef.current.children;
    gsap.set(elements, { y: 30, autoAlpha: 0 });

    gsap.to(elements, {
      y: 0,
      autoAlpha: 1,
      stagger: 0.4,
      duration: 1,
      ease: "easeInOut",
      overwrite: "auto",
    });
  }, []);

  return (
    <div
      ref={childrenRef}
      style={{ color: pColor }}
      className="flex flex-col mx-6 mt-20 pt-16 sm:px-20 md:px-32 lg:px-48 xl:px-64 2xl:px-80"
    >
      <h1 className="text-6xl sm:text-9xl font-gothic mb-12">
        Wando, Slim, & the Light Within
      </h1>
      
      <section className="mb-20">
        <h2 className="text-2xl sm:text-4xl font-roadway font-bold mb-4">
          Animated movie, coming of age family adventure
        </h2>
        <div className="flex justify-center mb-12">
          {/* <img
            style={{ borderColor: pColor }}
            className="border-[1px] w-fit h-auto"
            alt="Movie Poster"
          /> */}
        </div>
      </section>
      
      <section className="mb-20">
        <h2 className="text-4xl sm:text-6xl font-roadway font-bold mb-4">Logline</h2>
        <p className="font-roadway text-lg sm:text-xl lg:text-2xl">
          The story follows Slim, an orphaned caterpillar, and his friends Lucy and Wando, on a perilous journey through a dangerous forest as they protect Slim during his vulnerable cocoon phase, ultimately discovering their inner courage.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="text-4xl sm:text-6xl font-roadway font-bold mb-4">Setting</h2>
        <p className="font-roadway text-lg sm:text-xl lg:text-2xl">
          Title: The Light Within
          <br />
          The film revolves around a caterpillar's cocoon, both within the caterpillar's mind during the phase and outside, as the caterpillar's friends protect it from dangers as they move across a dangerous forest.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="text-4xl sm:text-6xl font-roadway font-bold mb-4">Why I care about telling this story/main theme:</h2>
        <p className="font-roadway text-lg sm:text-xl lg:text-2xl">
          
          At its core, the story is about finding the inner courage or light, if you will, to do things you've never done before. The story's three main characters each experience this:
          <br /><br />
          Slim, an orphaned caterpillar, must find the courage to conquer his subconscious fears. In order to wake from his cocoon dream and hatch, he must see himself as a butterfly in his reflection before the eye in the sky closes.
          <br /><br />
          Lucy, a lightning bug who literally doesn't have her inner light due to anxiety, learns to access it through meditation, ultimately using her regained light to send a distress signal and save Slim.
          <br /><br />
          Wando, a praying mantis secretly in love with Slim's mom, agrees to care for Slim despite his self-doubt. As they face life and death again and again, he finds the courage each time and shows he is willing to give his life for his friends. He ensures Slim's survival and plans to confess his feelings to his love when he joins Slim on his flight south.
        </p>
      </section>

      <div className="flex justify-center mb-12">
        {/* <img
          style={{ borderColor: pColor }}
          className="border-[1px] w-fit h-auto"
          alt="Scene from the movie"
        /> */}
      </div>

      <section className="mb-20">
        <h2 className="text-4xl sm:text-6xl font-roadway font-bold mb-4">The Plot</h2>
        <p className="font-roadway text-lg sm:text-xl lg:text-2xl">
          After a prologue where we meet Slim's mom and learn how Wando came to be entrusted with baby Slim, the main action occurs during Slim's cocoon phase. On the day Slim cocoons, a flood upends Wando's home, and Lucy crashes into his world. The cocoon detaches, sending Wando and Lucy swimming after it. They secure it, but it has water damage and needs help from the Bats of Battisahava. They escape the web of a spider, the death attacks from a salamander, and fight with one another but ultimately reach the cave at the story's midpoint. The bats can drain the cocoon of water, but they cannot provide all the help Slim needs, leading to the hatching of a plan to bring Slim to Lucy's lightning bug family for an electrical jolt.
          <br /><br />
          Meanwhile, Slim's mental journey inside the cocoon shows him struggling to see himself as a butterfly in his reflection. He can for a second, but not long enough to fly. The water damage from the outside world makes things more difficult, and the more time passes, the more challenging it is for him to believe in himself. If he is unable to see himself as a butterfly in his reflection before the eye in the sky closes, he will never hatch!
          <br /><br />
          On the outside, a human boy captures Lucy, Wando, and Slim in a glass jar. Using meditation techniques learned in the cave, Lucy signals her kin with her light, leading to their escape. As the rain pours and the spider reemerges, Lucy's family gives Slim a jolt of lightning, allowing him more time to see himself as a butterfly and hatch. As danger and death encircles them, the family provides Slim another jolt so he can fly, thus rescuing everyone from danger. The epilogue shows Wando joining Slim on his flight south to meet his love.
        </p>
      </section>

      <div className="flex justify-center mt-40 mb-40">
        <div className="flex flex-col items-center">
          <div
            onClick={() => handleNavigation("/")}
            className="flex cursor-pointer mb-4"
          >
            {modeToggle ? (
              <SideArrow2 className="h-10 mt-4 mr-2" />
            ) : (
              <SideArrow className="h-10 mt-4 mr-2" />
            )}
            <h2 className="text-2xl">Home&emsp;</h2>
          </div>
          <div
            onClick={() => handleNavigation("/sabrina")}
            className="flex cursor-pointer"
          >
            <h2 className="text-2xl">&emsp;Next</h2>
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

export default Wando;
