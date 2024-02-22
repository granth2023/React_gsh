import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DarkSwitch from './DarkSwitch';


function Nav ({ 
    modeToggle, 
    setModeToggle,
    isMenuOpen,
    setIsMenuOpen,
    pColor,
    handleNavigation 
}) {
    const navigate = useNavigate();

    return ( 
        <div> 
            <div 
                className="flex nav-div z-0 h-10 top-0 left-0 right-0 mx-6 sm:mx-20 md:mx-32 lg:mx-48 xl:mx-64 2xl:mx-80 pt-8 pb-8 justify-between items-center"
                style={{
                    borderBottom: `1px solid ${pColor}`,
                }}
            >
                                    <DarkSwitch   
                        modeToggle={modeToggle}
                        setModeToggle={setModeToggle}
                        pColor={pColor}
                    />
            </div>
        </div>
                )    }
                
export default Nav;