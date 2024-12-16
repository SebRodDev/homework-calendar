import React from 'react';
import './StartingPageLooks.css'

const StartingPage = () => {
  return (
    <div>
      <div className="background">
        <div className="plainBackground">
        <h1 className="titleText plainBackground">Homework Calendar</h1>
        <h2 className="titleText">A place where you can create a list of all your homework assignments!</h2>
        </div>
      <button className="logoutButton">logout</button>
      </div>
    
    </div>
  );
};

export default StartingPage;
