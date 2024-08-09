import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

function Profile({ onSignOut }) {
const [isLoading, setIsLoading] = useState(true);
const [userInfo, setUserInfo] = useState({});
const navigate = useNavigate();

const token = sessionStorage.getItem("JWTtoken");

useEffect(() => {
if (!token) {
    navigate("/login");
    return;
}

const fetchProfile = async () => {
    try {
    const response = await axios.get(`${apiUrl}/profile`, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });
    setIsLoading(false);
    setUserInfo({ name: response.data.name });
    } catch (error) {
    console.error(error);
    }
};

fetchProfile();
}, [token, navigate]);

const handleSignOut = () => {
    sessionStorage.removeItem("JWTtoken");
};

    return isLoading ? (
    <h1>Loading...</h1>
    ) : (
    <div>
        <h1>Welcome {userInfo.name}!</h1>
        <Link to="/" onClick={handleSignOut}>Sign Out</Link>
    </div>
    );
    }

export default Profile;
