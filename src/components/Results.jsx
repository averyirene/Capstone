import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../components/Results.scss'


const Results = ({ symptom, age, onReset }) => {

    const navigate = useNavigate();

    const handleBackClick = () => {
        onReset();
        navigate("/")
    };
    return (
        <div className="results__container">
            <h3 className='results__title'>Results</h3>

            <div className='results'>
            <p className='results__subtitle'>Symptom:</p> {symptom}
            </div>

            <div className='results'>
            <p className='results__subtitle'>Age:</p> {age}
            </div>

            <p>Your results...</p>

            <button className="checker__button" onClick={handleBackClick}>
                Back to Checker
            </button>
        </div>
    );
};

export default Results;
