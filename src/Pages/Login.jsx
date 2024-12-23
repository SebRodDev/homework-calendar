import React from 'react';
import './Styles/LoginLooks.css';
import { Rainify } from 'rainify';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    let navigate = useNavigate();

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
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
            <button type="button" class="loginButton">Login</button>
            </div>
            
            </div>
        </div>
    );  
}
