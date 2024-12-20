import React from 'react';
import StartingPage from './Pages/StartingPage';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Login from './Pages/Login';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartingPage/>}/>
      <Route path="/Login" element={<Login />}/>
    </Routes>
    
    
    
    </BrowserRouter>


  );
};



export default App;

