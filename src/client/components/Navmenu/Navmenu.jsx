import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navmenu.css';

const Navmenu = () => {
  return (
    <nav>
      <ul>
        <li className="Home">
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="internships">
          <NavLink to="/internships" activeClassName="active">
            Internships
          </NavLink>
        </li>
        <li className="events">
          <NavLink to="/events" activeClassName="active">
            Events
          </NavLink>
        </li>
        <li className="mentors">
          <NavLink to="/mentors" activeClassName="active">
            Mentors
          </NavLink>
        </li>
        <li className="networking">
          <NavLink to="/networking" activeClassName="active">
            Networking
          </NavLink>
        </li>
        <li className="about">
          <NavLink to="/about" activeClassName="active">
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navmenu;
