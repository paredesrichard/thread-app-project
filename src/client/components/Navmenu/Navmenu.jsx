import React from "react";
import "./Navmenu.css";

const Navmenu = () => {
  return (
    <nav>
      <ul>
        <li className="internships">
          <a href="#internships">Internships</a>
        </li>
        <li className="events">
          <a className="active" href="/events">
            Events
          </a>
        </li>
        <li className="mentors">
          <a href="#mentors">Mentors</a>
        </li>
        <li className="networking">
          <a href="#networking">Networking</a>
        </li>
        <li className="about">
          <a href="#about">About us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navmenu;
