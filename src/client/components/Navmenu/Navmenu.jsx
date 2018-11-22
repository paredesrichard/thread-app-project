import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import LoginContext from '../../contexts/login';

// import './Navmenu.css';

class Navmenu extends Component {
  render() {
    const contextType = LoginContext._currentValue;
    return (
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a className="navbar-brand mr-5" href="/">
          <img
            src={'src/client/images/threadlogo.svg'}
            width="50px"
            height="50px"
            className="d-inline-block align-center"
            alt=""
          />
          THREAD
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse mr-auto"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-2">
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
            {contextType.isLoggedIn ? (
              <li className="nav-item">
                <NavLink to="/logout" className="nav-link">
                  Logout
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navmenu;
