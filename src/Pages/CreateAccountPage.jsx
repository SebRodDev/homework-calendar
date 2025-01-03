import React from 'react';
import { Rainify } from 'rainify';
import './Styles/CreateAccountPageLooks.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export default function CreateAccountPage() {
    let navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const createAccount = (async (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError(true);
            return; 
        }

        try {
            await axios.post('http://localhost:8080/api/users/user', { username, password });
            alert('Account was created successfully'); // acts like a JOptionPane in Java
        } catch(error) {
            alert('Error creating account: ' + error); // JOptionPane basically 
        }
    });

    return (
        <div class="createBackground">
            <Rainify 
            isRaining 
            intensity={125}
            color='rgba(255, 255, 255, 0.5)'
            zIndex={0}
            speed={10}
            thickness={1}
            splashColor='rgba(255, 255, 255, 0.5)'
            splashDuration={0}>
            </Rainify>

            {error && <div>
                Please fill out all fields!
                </div>}

            <button type="button" onClick={() => navigate("/")} class="backButton">Back</button>

            <div class="informationArea">
            <h1>Create Account</h1>
            <h2>Please input information to create an account</h2>
            <input
             type="text" 
             placeholder="New Username"
             value={username}
             onChange={(e) => setUsername(e.target.value)}>
             </input>
            <input type="text" placeholder="Full Name"></input>
            <input 
             type="password" 
             placeholder="New Password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}>
             </input>
            <button type="button" class="createAccountButton" onClick={createAccount}>Create Account</button>
            </div>

        </div>
    );
}

