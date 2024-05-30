import React from 'react';
import Nav from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
        <Route path="/" element={<Home/>} />
        </Routes>
        {/* <Projects /> */}
      </Router>
    </div>
  );
}

export default App;