import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lottie from  "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Typed from './components/Typed';


function App() {
  return (
    <div>  
      <Navbar />
      <h1>
        Hey! I am Thrishal
      </h1>
      <Typed />
    </div>
  );
}

export default App;