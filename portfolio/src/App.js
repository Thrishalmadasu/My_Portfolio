import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lottie from  "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";
import Projects from './components/Projects';


function App() {
  return (
    <div>   
      <Projects />
    </div>
  );
}

export default App;