import React from 'react';
import './Styles/LoginLooks.css';

export default function Login() {
    return (
        <div>
            <h1>Login</h1>
            <h2>Please enter your information</h2>
            <input type="text" placeholder="please enter a username..."></input>
            <input type="text" placeholder="please enter a password..."></input>
        </div>
    );  
}
