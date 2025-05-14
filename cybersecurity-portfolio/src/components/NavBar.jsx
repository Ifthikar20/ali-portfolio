// File: src/components/Navbar.jsx
import React from 'react';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="logo-text">&lt;AS/&gt;</span>
      </div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
