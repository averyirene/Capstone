import React, { useState } from 'react';
import PatternOne from '../components/PatternOne';
import PatternTwo from '../components/PatternTwo';
import './Breathe.scss';

const Breathe = () => {
const [currentPattern, setCurrentPattern] = useState('patternOne'); 

const handlePatternChange = (pattern) => {
setCurrentPattern(pattern);
};

return (
    <> 

    <div className='homepage__disclaimer'>
        <h2>Mindful Breathing</h2>
        <p className="homepage__disclaimer--text"> Lorem ipsum dolor, sit amet 
        consectetur adipisicing elit. Itaque a praesentium accusantium consectetur
        corporis!</p>

    </div>

    {currentPattern === 'patternOne' && <PatternOne />}
    {currentPattern === 'patternTwo' && <PatternTwo />}
    
    <div className='button__pattern--container'>
        <button className='pattern__button' onClick={() => handlePatternChange('patternOne')}>478 Breathing</button>
        <button className='pattern__button' onClick={() => handlePatternChange('patternTwo')}>444 Breathing</button>
    </div>
    </>
);
};

export default Breathe;
