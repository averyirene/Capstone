import pattern__1 from '../assets/reassure478.gif';
import React, { useState, useEffect } from 'react';

const PatternOne = () => {
const [text, setText] = useState('Breathe in');

useEffect(() => {
    let breathein, holdbreath, breatheout;

    const PatternOneTimer = () => {
    setText('Breathe in');
    breathein = setTimeout(() => {
        setText('Hold');
        holdbreath = setTimeout(() => {
        setText('Breathe out');
        breatheout = setTimeout(PatternOneTimer, 8000); 
        }, 7000); 
    }, 4000); 
    };

    PatternOneTimer(); 

    
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
            <img className='pattern__1' src={pattern__1}/>
        </div>
    </div>

    </>
)
}

export default PatternOne;

