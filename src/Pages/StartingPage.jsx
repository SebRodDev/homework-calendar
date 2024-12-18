import React from 'react';
import './StartingPageLooks.css'
import { Rainify } from 'rainify';

const StartingPage = () => {
  return (
    <div>
      <div class="background">
      <Rainify 
        isRaining 
        intensity={200}
        color='rgba(255, 255, 255, 0.5)'
        zIndex={0}
        speed={10}
        thickness={1}
        splashColor='rgba(255, 255, 255, 0.5)'
        splashDuration={0}>
      </Rainify>

      <header>
        <nav>
        <ul class = "navLinks">
        <li><a href = "#">Login</a></li>
        <li><a href = "#">Create Account</a></li>
        <li><a href = "#">About</a></li>
        </ul>
        </nav>
        </header>
        
      <div> 
      <h1 className="titleText">Homework Calendar</h1>
      <h2 className="subText">A place where you can create a list of all your homework assignments!</h2>
      
      
      </div>

      </div>
    
    </div>
  );
};

export default StartingPage;
