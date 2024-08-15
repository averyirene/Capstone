import React, { useState } from 'react';
import custom from '../assets/reassure-selfgrow.gif';

const PatternCustom = () => {
const [isHolding, setIsHolding] = useState(false);

const handleMouseDown = () => {
setIsHolding(true);
};

const handleMouseUp = () => {
setIsHolding(false);
};

const handleTouchStart = () => {
setIsHolding(true);
};
    
const handleTouchEnd = () => {
setIsHolding(false);
};

const patternGrow = {
transition: 'transform 0.8s ease',
transform: isHolding ? 'scale(2.0)' : 'scale(1)',
};

return (

    <>
    <div className='breathe__container'>
        <h1 className='breathe__title'>Breathe</h1>
        <h4 className='breathe__text'>Click and Hold!</h4>


        <div className='breathing__box'>

            <img className='pattern__1'
                src={custom} style={patternGrow} onMouseDown={handleMouseDown} 
                onMouseUp={handleMouseUp} onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd} />

        </div>
    </div>
</>
);
};

export default PatternCustom;
