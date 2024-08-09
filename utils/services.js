import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;


export const login = async (username, password) => {
try {
const response = await axios.post(`${apiUrl}/login`, { username, password });
    return response.data;
    } catch (error) {
    console.error('Login Error:', error);
    throw error; 
    }
    };

export const signup = async (username, password) => {
try {
const response = await axios.post(`${apiUrl}/signup`, { username, password });
    return response.data;
    } catch (error) {
    console.error('Signup Error:', error);
    throw error; 
    }
    };

export const getProfile = async (token) => {
try {
const response = await axios.get(`${apiUrl}/profile`, {
    headers: {
    Authorization: `Bearer ${token}`,
    },
});
    return response.data;
    } catch (error) {
    console.error('Get Profile Error:', error);
    throw error; 
    }
    };
