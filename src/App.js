import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Authentication/Home';
import Login from './Authentication/Login';
// import Signups from './Authentication/Signups';
function App() {
  return (
    <>
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signups />} />
      </Routes>
    </Router>
  
    </>
  )
}

export default App;
