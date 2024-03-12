
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Bg from './components/Bg.js'
import Nav from './components/Nav.js'
import Landing from './pages/Landing.js';
import Dreamerica from './pages/Dreamerica.js';
import Deerkillpark from './pages/DeerkillPark.js';
import Safecracker from './pages/Safecracker.js';
import Wando from './pages/Wando.js';
import Sabrina from './pages/Sabrina.js';
import FinishedWorks from './pages/Finishedworks.js';
import RadiowayDrive from './pages/RadiowayDrive.js';
import { Route, Routes, useNavigate } from 'react-router-dom';

import React, { useState, useEffect } from 'react'


function App() {

  const [modeToggle, setModeToggle] = useState(false);
  const [pColor, setPColor] = useState('#FFFFFF');

  useEffect(() => {
    if (modeToggle) {
      setPColor('#F7B69F');
    } else {
      setPColor('#FFFFFF');
    }
  }, [modeToggle]);

  const navigate = useNavigate()

  const handleNavigation = (path) => {
    return new Promise((resolve) => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

      setTimeout(() => {
        resolve();
      }, 500);
    }).then(() => {
      navigate(path);
    });
  };

  return (
    <div className="App" style={{ position: 'relative', zIndex: 1 }}>
      <Bg modeToggle={modeToggle} /> *
       <Nav modeToggle={modeToggle} setModeToggle={setModeToggle} handleNavigation={handleNavigation} pColor={pColor}/>
       <Routes>
        <Route path="/" element= {<Landing modeToggle={modeToggle} pColor={pColor} handleNavigation={handleNavigation}/>}
        ></Route>
        <Route path="/dreamerica" element = {<Dreamerica modeToggle={modeToggle} pColor={pColor} handleNavigation={handleNavigation}/>}
       > </Route>
       <Route path="/deerkillpark" element = {<Deerkillpark modeToggle={modeToggle} pColor={pColor} handleNavigation={handleNavigation}/>}
       ></Route>
        <Route path="/safecracker" element = {<Safecracker modeToggle={modeToggle} pColor={pColor} handleNavigation={handleNavigation}/>}
       ></Route>
        <Route path="/wando" element = {<Wando modeToggle={modeToggle} pColor={pColor} handleNavigation={handleNavigation}/>}
       ></Route>
        <Route path="/sabrina" element = {<Sabrina modeToggle={modeToggle} pColor={pColor} handleNavigation={handleNavigation}/>}
       ></Route>
        <Route path="/finishedworks" element = {<FinishedWorks modeToggle={modeToggle} pColor={pColor} handleNavigation={handleNavigation}/>}
       ></Route>
       <Route path="/radiowaydrive" element = {<RadiowayDrive modeToggle={modeToggle} pColor={pColor} handleNavigation={handleNavigation}/>}
       ></Route>
       </Routes>
      
   




    </div>
  )
}

export default App;
