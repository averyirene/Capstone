import React, { useState } from 'react';
import PatternOne from '../components/PatternOne';
import PatternTwo from '../components/PatternTwo';
import PatternCustom from '../components/PatternCustom';
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
        <p className="homepage__disclaimer--text">Mindful breathing involves 
        observing your inhales and exhales. There are different breathing rhythms 
        which promote stress relief and pain relief, a sense of control and meditative benefits. 
        </p>

    </div>

    {currentPattern === 'patternOne' && <PatternOne />}
    {currentPattern === 'patternTwo' && <PatternTwo />}
    {currentPattern === 'patternCustom' && <PatternCustom />}
    
    <div className='button__pattern--container'>
        <button className='pattern__button' onClick={() => handlePatternChange('patternOne')}>478 Breathing</button>
        <button className='pattern__button' onClick={() => handlePatternChange('patternTwo')}>444 Breathing</button>
        <button className='pattern__button' onClick={() => handlePatternChange('patternCustom')}>Make Your Own!</button>
    </div>
    </>
);
};

export default Breathe;
