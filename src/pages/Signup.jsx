import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Signup.scss';

const apiUrl = import.meta.env.VITE_API_URL;

export default function Signup({ setIsLoggedIn }) {
const [error, setError] = useState("");
const navigate = useNavigate();


const handleSubmit = async (event) => {
event.preventDefault();

const username = event.target.username.value;
const password = event.target.password.value;

try {
    const response = await axios.post(`${apiUrl}/signup`, {
        username,
        password,
    }, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.data.success) {

    console.log("Signup successful");
    alert('Signup successful, please log in');
    setTimeout(() => {
        navigate("/login");
    }, 500);

    } else {
    setError("Signup failed.");
    }
} catch (error) {
    console.error("Signup failed");
}
};

return (
<div className="signup__page">
    <form className="signup__form" onSubmit={handleSubmit}>
    <h1 className="signup__title">Sign Up</h1>

    <div className="signup__form--container">
        <label className="signup__label">Username:</label>
        <input className="signup__input" type="text" name="username" required />
    </div>

    <div className="signup__form--container">
        <label className="signup__label">Password:</label>
        <input className="signup__input" type="password" name="password" required />
    </div>

    {error && <div className="signup__message">{error}</div>}

    <button type="submit" className="signup__button">Sign Up</button>

    <div className="login__page--login">
        <p className="login__register--text">Have an account?</p>
        <button className ="signup__button" type="button" onClick={() => navigate("/login")}>Log In</button>
    </div>
    </form>
    
</div>
);
}
