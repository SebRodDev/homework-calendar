import React from 'react';
import './Styles/LoginLooks.css';
import { Rainify } from 'rainify';

export default function Login() {
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
                  
            <div class="loginSection">
            <h1>Login</h1>
            <h2>Please enter your information</h2>
            <input type="text" placeholder="please enter a username..."></input>
            <input type="text" placeholder="please enter a password..."></input>
            </div>
        </div>
    );  
}
