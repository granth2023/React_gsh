import React, { useState, useEffect } from 'react';
//assest noise texture

function Bg({ modeToggle }) {
    const [hues, setHues] = useState([
        10, 28, 50, 75, 42, 30, 10, 18, 35, 55, 63, 70
    ])
    const [directions, setDirections] = useState(new Array(12).fill(true))

    useEffect(() => {
        const interval = setInterval(() => {
            setHues((prevHues) => {
                return prevHues.map((hue, index) => {
                    if(directions[index] && hue < 75) {
                        return hue + 1
                    } else if (!direcitons[index] && hue > 0){
                        return hue - 1
                    } else if (hue === 75)}
                    setDirections((prev) => {
                        const newDirections = [...prev]
                        newDirections[index] = false 
                        return newDirections
                    })
                    return hue -1 
                } else if (hue === 0){
                    setDirections((prev) => {
                        const newDirections = [...prev]
                        newDirections[index] = true
                        return newDirections 
                    })
                    return hue + 1
                } else { 
                
                    return hue
        }
    })
            })
        }, 55)

