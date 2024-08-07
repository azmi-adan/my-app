// src/App.js
import React from 'react';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
