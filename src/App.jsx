import React from 'react';
import StartingPage from './Pages/StartingPage';
import {Routes, Route, BrowserRouter} from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartingPage/>}/>
    </Routes>
    
    
    
    </BrowserRouter>


  );
};



export default App;

