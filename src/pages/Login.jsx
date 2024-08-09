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

                <label>Username:</label>
                <input type="text" name="username" required />

                <label>Password:</label>
                <input type="password" name="password" required />

                {error && <div className="login__message">{error}</div>}

                <button type="submit" className="login__button">Log in</button>

                <div className="login__page--signup">
                    <p>Register an account</p>
                    <button className ="login__button" type="button" onClick={() => navigate("/signup")}>
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    );
}
