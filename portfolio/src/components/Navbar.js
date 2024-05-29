import React from 'react';
// import { Link } from 'react-router-dom';
import './NavBar.css';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
         <a>Home</a> 
        </li>
        <li>
         <a>About</a> 
        </li>
        <li>
         <a>Projects</a> 
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;