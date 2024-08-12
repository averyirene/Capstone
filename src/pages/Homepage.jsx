import React, { useState } from 'react';
import './Homepage.scss';
import Results from '../components/Results';

const apiUrl = import.meta.env.VITE_API_URL;

const Homepage = () => {

    const [symptom, setSymptom] = useState('');
    const [age, setAge] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [result, setResults] = useState('');
    const [errors, setErrors] = useState({ symptom: '', age: '' });

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!symptom) {
            alert('Please enter a symptom');
            return;
        }

        if (!age) {
            alert('Please enter your age');
            return;
        } else if (age < 12) {
            alert('Age must be at least 12');
            return;
        }

        setShowResults(true);
        setErrors({ symptom: '', age: '' }); 

        try {
            const response = await fetch(`${apiUrl}/api`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ symptoms: symptom }),
            });
    
            if (!response.ok) {
                throw new Error('Network error');
            }
    
            const text = await response.text();
            console.log(text);
    
            setResults(text);
        } catch (error) {
            console.error('Error getting data');
            setResults('Failed to get results.');
        }
    };

    const handleReset = () => {
        setSymptom('');
        setAge('');
        setShowResults(false);
    };

    return (
        <>

        <div className="homepage__disclaimer">
            <h2>Disclaimer</h2>
            <p className="homepage__disclaimer--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, 
                placeat odit possimus qui dolore asperiores repudiandae cum dolor! 
                </p>
        </div>

        <h3>Symptom Checker</h3>

        <section className="checker__container">
        {!showResults ? (

            <form className="checker__form" autoComplete='off' onSubmit={handleSubmit}>
                <label htmlFor="symptom">Symptom</label>
                <input
                    id="symptom"
                    type="text"
                    placeholder="Enter symptom"
                    className='input__symptom'
                    value={symptom}
                    onChange={(e) => setSymptom(e.target.value)}
                    
                />

                <label>Age</label>
                <input
                    id="age"
                    type="number"
                    placeholder="Enter age"
                    onChange={(e) => setAge(e.target.value)}

                />
                <button type="submit" className="checker__button">Ease My Mind</button>
            </form>
        ) : (
            <Results symptom={symptom} age={age} result={result} onReset={handleReset} />
        )}
    </section>
        </>
    );
};

export default Homepage;