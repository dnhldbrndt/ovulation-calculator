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
    <div className="nav-header"><div className="nav-icons">
    <a href="/"><img src={homeimg}   className="nav-img" alt="home"/></a>
    <a href="/"><img src={calimg}  className="nav-img" alt="calendar"/></a></div>
      <div className="main-title">Ovulation Calculator </div> 
      <div className="nav-icons">
      <a href="/cycle"><img src={cycleimg}   className="nav-img" alt="cycle"/> </a>
      <a href="#"  ><img src={crossimg}    className="nav-img" alt="exit"/> </a>
      </div>
      </div>
  </div>
)
}

export default Header