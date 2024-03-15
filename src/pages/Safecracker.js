import React, { useEffect, useState, useRef } from 'react';
import { ReactComponent as SideArrow } from '../assests/sitesidearrow.svg';
import { ReactComponent as SideArrow2 } from '../assests/sitesidearrow2.svg';
import safecracker from '../assests/safecrackerposterAI.png';
import { gsap } from 'gsap';

function Safecracker({ modeToggle, pColor, handleNavigation }) {
  // Adjusted to hold multiple section identifiers
  const [expandedSections, setExpandedSections] = useState([]);

  const childrenRef = useRef(null);

  useEffect(() => {
    const elements = childrenRef.current.children;
    gsap.set(elements, { y: 30, autoAlpha: 0 });
    gsap.to(elements, {
      y: 0,
      autoAlpha: 1,
      stagger: 0.4,
      duration: 1,
      ease: 'easeInOut',
      overwrite: 'auto',
    });
  }, []);

  // Toggle section expansion
  function toggleSection(sectionId) {
    setExpandedSections(prev => {
      const isSectionExpanded = prev.includes(sectionId);
      if (isSectionExpanded) {
        return prev.filter(id => id !== sectionId); // Remove section from expanded list
      } else {
        return [...prev, sectionId]; // Add section to expanded list
      }
    });
  }

  return (
    <div ref={childrenRef} style={{ color: pColor }} className="flex flex-col mx-6 mt-20 pt-16 sm:px-20 md:px-32 lg:px-48 xl:px-64 2xl:px-80">
      <h2 className="text-23xl text-center sm:text-8xl font-gothic ">Safecracker</h2>
      <h4 className="text-lg text-center sm:text-5xl font-gothic italic font-bold mt-12">
        There's money IN these hills!
      </h4>
      <div className="mt-12" style={{ maxWidth: '60%', margin: 'auto' }}>
        <img
          style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: 'auto' }}
          src={safecracker}
          alt="Safecracker Poster"
        />
      </div>
      
      {['Synopsis', 'Dream Casting', 'Writer\'s Note'].map((section) => (
        <React.Fragment key={section}>
          <h3 className="text-lg sm:text-4xl font-gothic font-bold mt-12 cursor-pointer text-center" onClick={() => toggleSection(section)}>
            {section} {expandedSections.includes(section) ? '-' : '+'}
          </h3>
          {expandedSections.includes(section) && (
            <div
            className={`fadeIn text-justify mt-4 sm:text-xl`}
            style={{
              maxWidth: '80%',
              margin: 'auto',
              padding: '10px',
              borderRadius: '5px',
              boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.25)',
              transition: 'all 0.3s ease-out'
            }}
          >
              {section === 'Synopsis' && (
          <p className='font-gothic text-justify mt-4 sm:text-xl ' style={{ maxWidth: '80%', margin: 'auto'}}>
            Believed only as an old Hollywood tale, the bank vault underneath the Hollywood sign becomes the location for the world's greatest safecracker and his crew's biggest and final score. Is the vault even real? How will they get in? Who owns it? And will they make it out alive?
          </p>
        )}
        {section === 'Dream Casting' && (
          <p>
            Imagine an ensemble cast featuring dynamic actors known for their compelling performances in action and drama genres, such as John Doe, Jane Doe, and others, bringing this thrilling heist story to life.
          </p>
        )}
              {/* Content goes here based on the section */}
              {/* Example content, adapt as necessary */}
              
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Safecracker;
