import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-top">
          <h1 className="navbar-title">GreenHub</h1>
          <h2 className="welcome-text">WELCOME</h2>
        </div>
        <div className="navbar-bottom">
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>LOGIN</li>
            <li>SIGNUP</li>
            <li>PROFILE</li>
            <li className="search-bar">
    <input type="text" placeholder="Search for plants..." />
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
