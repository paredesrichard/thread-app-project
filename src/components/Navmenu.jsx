import React from "react";
import "./Navmenu.css";

const Navmenu = () => {
  return (
    <nav>
      <ul>
        <li class="internships">
          <a href="#internships">Internships</a>
        </li>
        <li class="events">
          <a class="active" href="#events">
            Events
          </a>
        </li>
        <li class="mentors">
          <a href="#mentors">Mentors</a>
        </li>
        <li class="networking">
          <a href="#networking">Networking</a>
        </li>
        <li class="about">
          <a href="#about">About us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navmenu;
