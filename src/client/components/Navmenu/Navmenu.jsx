import React from 'react';
import { NavLink } from 'react-router-dom';

// import './Navmenu.css';

const Navmenu = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/internships" className="nav-link">
            Internships
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/events" className="nav-link">
            Events
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/mentors" className="nav-link">
            Mentors
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/networking" className="nav-link">
            Networking
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            About Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navmenu;
