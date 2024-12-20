import React from 'react';
import './Styles/StartingPageLooks.css';
import { Rainify } from 'rainify';
import {Routes, Route} from 'react-router-dom';
import Login from './Login';
import CreateAccountPage from './CreateAccountPage';
import AboutCreatorPage from './AboutCreatorPage';
import { Link } from 'react-router-dom';

const StartingPage = () => {
  return (
    <div class="removingOverflow">
        <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900italic,900' rel='stylesheet' type='text/css'></link>
      <div class="background">  {/* div for the background */}
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

      <header>
        <nav> 
        <ul class = "navLinks">
        <li><Link to = "/Login">Login</Link></li>
        <li><Link to = "/createAccountPage">Create Account</Link></li>
        <li><Link to = "/aboutPage">About</Link></li>
        </ul>
        </nav>
        
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/createAccountPage" element={<CreateAccountPage />} />
          <Route path="/aboutPage" element={<AboutCreatorPage />} />
        </Routes>

        </header>
        
      <div> {/* opening div for the text */}
      <h1 className="titleText">Homework Calendar</h1>
      <h2 className="subText">A place where you can create a list of all your homework assignments!</h2>
      </div> {/* closing div for the text */}

      </div> {/* closing div for the background */}

      <div class ="missionSection"> {/* div for the content at the bottom of the page */}
      
        <h2>Our Mission</h2> {/* Come back to this and work on this part later */}
        <p>
          I want to provide a platform for students to be able to not have to scroll through their syllabi for when homework is due. For that reason 
          I have created a platform where students can simply upload a copy of their class's syllabus and have a machine learning model make a calendar 
          for the student over the entire semester. Likewise, there is a feature for the student to clear their homework schedule entirely and start over 
          without having to create a new account.
        </p>

        <img></img> 
      </div> {/* closing div for the content at the bottom of the page */}
    
    </div> /* Closing div for the over-arching div */
  );
};

export default StartingPage;
