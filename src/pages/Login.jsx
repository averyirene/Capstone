import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../pages/Login.scss';

const apiUrl = import.meta.env.VITE_API_URL;


export default function Login({ setIsLoggedIn }) {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;

        if (!username) {
            alert('Please enter your username');
            return;
        }

        if (!password) {
            alert('Please enter your password');
            return;
        }

        try {
            const response = await axios.post(`${apiUrl}/login`, {
                username,
                password,
            });

            sessionStorage.setItem("JWTtoken", response.data.token);

            if (typeof setIsLoggedIn === 'function') {
                setIsLoggedIn(true);
            }
            navigate("/profile");

        } catch (error) {
            console.error('Login error:', error);
            setError('Login failed.');
        }
    };

    return (
    
        <div className="login__page">
            <form className="login__form" onSubmit={handleLoginSubmit}>
                <h1 className="login__title">Log in</h1>

                <div className="login__form--container">
                    <label className="label__login">Username:</label>
                    <input className= "login__input" type="text" name="username"/>
                </div>

                <div className="login__form--container">
                    <label className="label__login">Password:</label>
                    <input className= "login__input" type="password" name="password"/>
                </div>

                {error && <div className="login__message">{error}</div>}

                <button type="submit" className="login__button">Log in</button>

                <div className="login__page--signup">
                    <p className="login__page--text">Register an account</p>
                    <button className ="signup__button--login" type="button" onClick={() => navigate("/signup")}>
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    
    
    );
}
