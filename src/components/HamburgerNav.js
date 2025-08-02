import React, { useState } from "react";

function HamburgerNav({ handleNavigation }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const navigateAndClose = (path) => {
    setIsOpen(false);
    handleNavigation(path);
  };

  return (
    <div className="fixed top-4 left-4 z-50 sm:top-6 sm:left-6">
    <div className="relative inline-block">
      <button
        onClick={toggleMenu}
        className="p-3 sm:p-4 border rounded-md bg-white text-black shadow-md text-xl focus:outline-none"
      >
        ☰
      </button>
  
    
        {isOpen && (
          <div className="absolute left-0 mt-2 bg-white text-black border rounded shadow-md">
            <ul className="py-2 px-4">
              <li
                className="py-1 hover:underline cursor-pointer"
                onClick={() => navigateAndClose("/")}
              >
                Services
              </li>
              <li
                className="py-1 hover:underline cursor-pointer"
                onClick={() => navigateAndClose("/gw")}
              >
                Ghostwriter
              </li>
              {/* <li
                classname="py-1 hover:underline cursor-pointer"
                onClick={() => navigateAndClose("/credits")}
                >
                Credits
                </li> */}

            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default HamburgerNav;
