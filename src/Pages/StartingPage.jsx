import React from 'react';
import './StartingPageLooks.css'

const StartingPage = () => {
  return (
    <div class="background">
      <header>
        <nav>
        <ul class = "navLinks">
        <li><a href = "#">Login</a></li>
        <li><a href = "#">Create Account</a></li>
        <li><a href = "#">About</a></li>
        </ul>
        </nav>
        </header>
      <div className="background">
        <div className="plainBackground">
        <h1 className="titleText plainBackground">Homework Calendar</h1>
        <h2 className="titleText">A place where you can create a list of all your homework assignments!</h2>
        </div>
      
      
      </div>
    
    </div>
  );
};

export default StartingPage;
