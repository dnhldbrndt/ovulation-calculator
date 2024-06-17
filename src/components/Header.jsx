import React, { useState, useEffect } from 'react';
import "../assets/style.css";
import "../assets/header-style.css";
import homeimg from "../assets/home.png"
import calimg from "../assets/cal.png"
import cycleimg from "../assets/cycle.png"
import crossimg from "../assets/cross.png"
 

const Header = () => {
   

return(
  <div>
    <div className="nav-header">
    <img src={homeimg} style={{width:"5%",height:"5%"}}  alt=""/> 
    <img src={calimg} style={{width:"5%",height:"5%"}}  alt=""/> 
      <div>Ovulation Calculator </div> 
      <img src={cycleimg} style={{width:"5%",height:"5%"}}  alt=""/> 
      <img src={crossimg} style={{width:"5%",height:"5%"}}  alt=""/> 
      
      </div>
  </div>
)
}

export default Header