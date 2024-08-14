import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '../pages/Profile.scss';
import loader from '../assets/reassure-loader.gif';

const apiUrl = import.meta.env.VITE_API_URL;

function Profile({}) {
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

const newDate = (dateTimeString) => {
    return dateTimeString.split('T')[0]; 
};

const handleAddEntry = async (event) => {
    event.preventDefault();

    const now = new Date();
    const date = now.toISOString().split('T')[0]; 
    const currentTime = now.toTimeString().split(' ')[0]; 
    
    try {
        const response = await axios.post(
            `${apiUrl}/journal`,
            {
                username: userInfo.username,
                date: date,
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
            <img src={loader} alt="Loading..."/>
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

            </div>

            <div className="journal__entries">
                {journalEntries.length === 0 ? (
                    <p className="journal__entries--response">No journal entries yet.</p>
                ) : (
                    journalEntries
                        .filter(entry => entry.username === userInfo.username) 
                        .map((entry) => (
                            <div key={entry.id} className="journal__entry">
                                <p className="journal__entry--title">Entry:</p> <p className="journal__entry--entry">{entry.entry}</p>
                                <p className="journal__entry--title">Entry Date:</p> <p className="journal__entry--text">{newDate(entry.date)}</p>
                            </div>
                        ))
                )}
            </div>
        <div className="signout__button--container">
        <Link to="/" onClick={handleSignOut} className="signout__button">Sign Out</Link>
        </div>
    </div>


    );
    }

export default Profile;
