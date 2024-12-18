import React from 'react';
import './StartingPageLooks.css'
import { Rainify } from 'rainify';

const StartingPage = () => {
  return (
    <div>
        <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900italic,900' rel='stylesheet' type='text/css'></link>
      <div class="background">
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
