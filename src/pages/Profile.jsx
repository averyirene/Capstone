import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '../pages/Profile.scss';

const apiUrl = import.meta.env.VITE_API_URL;

function Profile({ onSignOut }) {
const [isLoading, setIsLoading] = useState(true);
const [userInfo, setUserInfo] = useState({});
const [newEntry, setNewEntry] = useState(""); 
const [journalEntries, setJournalEntries] = useState([]); 

const navigate = useNavigate();

const token = sessionStorage.getItem("JWTtoken");

useEffect(() => {
if (!token) {
    navigate("/login");
    return;
}

const fetchProfile = async () => {
    try {
        const profileResponse = await axios.get(`${apiUrl}/profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setUserInfo({ username: profileResponse.data.username });

    
        const entriesResponse = await axios.get(`${apiUrl}/journal`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setJournalEntries(entriesResponse.data); 
        setIsLoading(false);
    } catch (error) {
        console.error(error);
    }
};

fetchProfile();
}, [token, navigate]);

const handleSignOut = () => {
    sessionStorage.removeItem("JWTtoken");
};

const handleAddEntry = async (event) => {
    event.preventDefault();

    const currentDate = new Date().toISOString().split('T')[0]; 
    const currentTime = new Date().toTimeString().split(' ')[0];

    try {
        const response = await axios.post(
            `${apiUrl}/journal`,
            {
                username: userInfo.username,
                date: currentDate,
                time: currentTime,
                entry: newEntry,
            },
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );

        setJournalEntries([...journalEntries, response.data]); 
        setNewEntry(""); 
    } catch (error) {
        console.error(error);
    }
};

    return isLoading ? (
    <h1>Loading...</h1>
    ) : (
    <div>
        <h1 className="profile__title">Welcome {userInfo.username}!</h1>

            <div className="journal__container">

                <form className="journal" onSubmit={handleAddEntry}>
                    <textarea
                        value={newEntry}
                        onChange={(e) => setNewEntry(e.target.value)}
                        placeholder="What's going on today?"
                    />
                <button type="submit" className="journal__button">Add Entry</button>


                </form>

                <div className="symptoms__log">
                    <p className="symptoms__log--text">My symptoms...</p>
                </div>

            </div>

            <div className="journal__entries">
                {journalEntries.length === 0 ? (
                    <p className="journal__entries--response">No journal entries yet.</p>
                ) : (
                    journalEntries
                        .filter(entry => entry.username === userInfo.username) // Filter entries by username
                        .map((entry) => (
                            <div key={entry.id} className="journal__entry">
                                <p>Entry: {entry.entry}</p>
                                <p className="journal__entry--text">Entry Date: {entry.date}</p>
                            </div>
                        ))
                )}
            </div>

        <Link to="/" onClick={handleSignOut} className="signout__button">Sign Out</Link>
    </div>


    );
    }

export default Profile;
