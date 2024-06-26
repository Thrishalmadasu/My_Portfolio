import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineHome} from "react-icons/ai";
import {BsPerson, BsCodeSlash} from "react-icons/bs";
import {CgFileDocument} from "react-icons/cg";


const Nav = () => {

  return (
    <nav>
        <ul className='NavbarLinks'>
            <li><Link to="/"><AiOutlineHome/> Home</Link></li>
            <li><Link to="/About"><BsPerson/> About</Link></li>
            <li><Link to="/Projects"><BsCodeSlash/> Project</Link></li>
            {/* <li><Link to="/Resume"><CgFileDocument/> Resume</Link></li> */}
        </ul>
    </nav> 
  )
}

export default Nav