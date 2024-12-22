import React from 'react';
import { Rainify } from 'rainify';
import './Styles/CreateAccountPageLooks.css'

export default function CreateAccountPage() {
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

            <div class="informationArea">
            <h1>Create Account</h1>
            <h2>Please input information to create an account</h2>
            
            </div>

        </div>
    );
}

