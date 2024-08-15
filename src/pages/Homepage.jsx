import React, { useState } from 'react';
import './Homepage.scss';
import Results from '../components/Results';
import loader from '../assets/reassure-loader.gif';

const apiUrl = import.meta.env.VITE_API_URL;

const Homepage = () => {

    const [symptom, setSymptom] = useState('');
    const [age, setAge] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [result, setResults] = useState('');
    const [errors, setErrors] = useState({ symptom: '', age: '' });
    const [loading, setLoading] = useState(false);


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
        setLoading(true);

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

            await fetch(`${apiUrl}/symptoms`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionStorage.getItem("JWTtoken")}`
                },
                body: JSON.stringify({ symptom }),
            });

        } catch (error) {
            setLoading(false);
            console.error('Error getting data');
            setResults('Failed to get results.');
        
        } finally {
        setLoading(false);
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
            <p className="homepage__disclaimer--text">This symptom checker is designed specifically for people 
            struggling with hypochondria and health anxiety with the purpose of affirming their anxiety and not their
            symptoms. This does not supply any medical or health advice, and if you are seeking this, please contact 
            a health professional. 
                </p>
        </div>

        <h3>Symptom Checker</h3>

        <section className="checker__container">
                {loading ? (
                    <img src={loader} alt="Loading..."/>
                ) : !showResults ? (

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
    <span>Answers are powered by AI</span>

        </>
    );
};

export default Homepage;