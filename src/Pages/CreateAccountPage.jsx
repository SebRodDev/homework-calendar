import React from 'react';
import { Rainify } from 'rainify';
import './Styles/CreateAccountPageLooks.css';
import { useNavigate } from 'react-router-dom';

export default function CreateAccountPage() {
    let navigate = useNavigate();
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

            <button type="button" onClick={() => navigate("/")} class="backButton">Back</button>

            <div class="informationArea">
            <h1>Create Account</h1>
            <h2>Please input information to create an account</h2>
            <input type="text" placeholder="New Username"></input>
            <input type="text" placeholder="Full Name"></input>
            <input type="password" placeholder="New Password"></input>
            <button type="button" class="createAccountButton">Create Account</button>
            </div>

        </div>
    );
}

