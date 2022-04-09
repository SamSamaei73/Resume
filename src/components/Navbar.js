import React from 'react';
import '../css/Navbar.css';
import Logo from '../img/myLogo.png';

const Navbar = () => {

  return (
    <div id="Navbar">
      <div className="backStyle">
        <div className="logo">
          <div className="tittle">
            <img src={Logo} alt='Logo'/>
          </div>
        </div>
        <div className="main">
          <div className="d1"></div>
          <div className="d2"></div>
          <div className="d3"></div>
          <div className="d4"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
