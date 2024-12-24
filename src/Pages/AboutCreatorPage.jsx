import React from 'react';
import { Rainify } from 'rainify';
import { useNavigate } from 'react-router-dom';
import './Styles/AboutCreatorPageLooks.css';

export default function AboutCreatorPage() {
    let navigate = useNavigate();
    return (
        <div className="aboutBackground">
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

            <button type="button" class="backButton" onClick={() => navigate("/")}>Back</button>

            <div className="creatorInfoSection">
                <h1>About Creator</h1>
                <h2>Sebastian Rodriguez</h2>
                <img src="Images/linkedin-logo.png" alt="" width="100px" height="100px" />
            </div>
        </div>
    );
}