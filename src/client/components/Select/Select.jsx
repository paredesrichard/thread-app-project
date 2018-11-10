import React from "react";
import "./Select.css";

const Select = () => {
  return (
    <div className="select-container">
      <select id="categories" value={this.state.data.categories} name="categories" required>
        <option value="">None</option>
        <option value="Internships">Internships</option>
        <option value="Events">Events</option>
        <option value="Mentors">Mentors</option>
        <option value="Networking">Networking</option>
      </select>
    </div>
  );
};

export default Select;
