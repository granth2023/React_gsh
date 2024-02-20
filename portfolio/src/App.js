
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Route, Routes, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'




function App() {

  const [modeToggle, setModeToggle] = useState(false);
  const [pColor, setPColor] = useState('#101457');

  useEffect(() => {
    if(modeToggle ){
      setPColor('#F7B69F');
    } else {
      setPColor('#101457');
    }
  }, [modeToggle]);

  const navigate = useNavigate()

  const handleNavigation = (path) => { 
    return new Promise((resolve))
  }

export default App;
