import React from 'react';
import StartingPage from './Pages/StartingPage';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Login from './Pages/Login';
import CreateAccountPage from './Pages/CreateAccountPage';
import AboutCreatorPage from './Pages/AboutCreatorPage';
import HomeworkCalendar from './Pages/HomeworkCalendar';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartingPage/>}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/CreateAccountPage" element={<CreateAccountPage />} />
      <Route path="/aboutPage" element={<AboutCreatorPage />} />
      <Route path="/homeworkCalendar/:userUsername/:userId" element={<HomeworkCalendar />} />
    </Routes>
    
    
    
    </BrowserRouter>


  );
};



export default App;

