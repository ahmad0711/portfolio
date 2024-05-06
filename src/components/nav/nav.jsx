import React from 'react';
import './nav.css';
import {FcHome} from 'react-icons/fc';
import {FaUserGraduate} from 'react-icons/fa';
import {GiSecretBook} from 'react-icons/gi';
import {FcServices} from 'react-icons/fc';
import {BsMessenger} from 'react-icons/bs';
import {useState} from "react";


function Nav() {
  const [activeNav, setActiveNav] = useState(" ")
  return (
    <nav>
      
      <a href="/" onClick={()=> setActiveNav ('#header')} 
      className={activeNav === "#header" ? 'active' : ''}> <FcHome/> </a>

      <a href="#about" onClick={()=> setActiveNav ('#about')}
      className={activeNav === "#about" ? 'active' : ''} ><FaUserGraduate/></a>

      <a href="#experience" onClick={()=> setActiveNav ('#experience')}
      className={activeNav === "#experience" ? 'active' : ''} > <GiSecretBook/> </a>

      <a href="#services" onClick={()=> setActiveNav ('#services')}
      className={activeNav === "#services" ? 'active' : ''}> <FcServices/> </a>
      
      <a href="#contact" onClick={()=> setActiveNav ('#contact')}
      className={activeNav === "#contact" ? 'active' : ''}> <BsMessenger/> </a>
    
    </nav>
  )
}

export default Nav