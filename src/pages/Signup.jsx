import { useState } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export default function Signup({ setIsLoggedIn }) {
const [error, setError] = useState("");

const handleSubmit = async (event) => {
event.preventDefault();

const username = event.target.username.value;
const password = event.target.password.value;

try {
    const response = await axios.post(`${apiUrl}/signup`, {
    username,
    password,
    });

    if (response.data.success) {

    console.log("Signup successful");
    } else {
    setError("Signup failed.");
    }
} catch (error) {
    console.error("Signup failed");
}
};

return (
<main className="signup__page">
    <form className="signup__form" onSubmit={handleSubmit}>
    <h1 className="signup__title">Sign Up</h1>

    <label>Username:</label>
    <input type="text" name="username" required />

    <label>Password:</label>
    <input type="password" name="password" required />

    {error && <div className="signup__message">{error}</div>}

    <button className="signup__button">Sign Up</button>
    </form>
</main>
);
}
