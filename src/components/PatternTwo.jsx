import pattern__2 from '../assets/reassure444.gif';
import React, { useState, useEffect } from 'react';

const PatternTwo = () => {
const [text, setText] = useState('Breathe in');

useEffect(() => {
    let breathein, holdbreath, breatheout;

    const PatternOne = () => {
    setText('Breathe in');
    breathein = setTimeout(() => {
        setText('Hold');
        holdbreath = setTimeout(() => {
        setText('Breathe out');
        breatheout = setTimeout(PatternOne, 5000); 
        }, 4000); 
    }, 4000); 
    };

    PatternOne(); 

    
    return () => {
    clearTimeout(breathein);
    clearTimeout(holdbreath);
    clearTimeout(breatheout);
    };
}, []);

return (
    <>

    <div className='breathe__container'>
        <h1 className='breathe__title'>Breathe</h1>
        
        <h4 className='breathe__text'>{text}</h4>

        <div className='breathing__box'>
            <img className='pattern__1' src={pattern__2}/>
        </div>
    </div>

    </>
)
}

export default PatternTwo;

