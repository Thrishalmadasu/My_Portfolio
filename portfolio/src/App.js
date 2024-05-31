import React from 'react';
import Nav from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>}/> 
        <Route path="/Projects" element={<Projects/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;