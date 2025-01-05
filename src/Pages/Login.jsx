import React from 'react';
import './Styles/LoginLooks.css';
import { Rainify } from 'rainify';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggingIn, setLoggingIn] = useState(false);

    let navigate = useNavigate();

    const Login = (async (e) => {

        if (!username || !password) {
            alert("No username or password was provided! Please ensure everything is filled out.")
            return;
        }

        setLoggingIn(true);
        console.log("This is whatever the login status is: ", true);

        try {
        await axios.post('http://localhost:8080/api/users/login/user', { username, password });
        navigate("/homeworkCalendar");
        } catch (error) {
            setLoggingIn(false);
            console.log("This is whatever the login status is: ", false);
            alert("Error logging in: Incorrect username or password!");
        }
    });

    return (
        <div class="loginBackground">
            <Rainify /* Just the rain effects from the library that I imported */
                    isRaining 
                    intensity={125}
                    color='rgba(255, 255, 255, 0.5)'
                    zIndex={0}
                    speed={10}
                    thickness={1}
                    splashColor='rgba(255, 255, 255, 0.5)'
                    splashDuration={0}>
                  </Rainify>

        <button type="button" class="backButton" onClick={() => navigate("/")}>Back</button>

                  
            <div class="loginSection">
            <h1>Login</h1>
            <h2>Please enter your information</h2>

            <div>
            <input 
            type="text" 
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}>
            </input>
            <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}>
            </input>
            <button type="button" class="loginButton" onClick={(e) => Login(e)}>Login</button>

            {loggingIn ? (
                <div>
                    <h3>Homework Calendar</h3>
                    <h4>Successfully logged in. Redirecting...</h4>
                </div>
            ) : (
                <div>
                    <h3>Incorrect Information</h3>
                    <h4>Please make sure the information provided is correct</h4>
                </div>
            )}
            </div>
            
            </div>
        </div>
    );  
}
