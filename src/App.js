
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Bg from './components/Bg'
import Nav from './components/Nav'
import Landing from './pages/Landing';
import { Route, Routes, useNavigate } from 'react-router-dom';
import React, { useRef, useState, useEffect } from 'react'


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
        <Route path="/" element= {<Landing modetoggle={modeToggle} pColor={pColor} handleNavigation={handleNavigation}/>}></Route>
       </Routes>
      
   




    </div>
  )
}

export default App;
