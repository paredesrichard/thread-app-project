import React from 'react';
import './Card.css';
import { NavLink } from 'react-router-dom';

const Card = props => {
  console.log("data:", props.data);
  return (
    <div className="internships-card">
      <img
        src={props.data.internship_theme_image}
        className="internships-thumb-nail-img"
        alt="thumbnail"
      />
      <div className="card-body p-1" style={{ height: `250px` }}>
        <p>
          <span className="card-label">Title</span> :{' '}
          {props.data.internship_title}
          <br />
          <span className="card-label">Organisation Name</span> :{' '}
          {props.data.organisation_name}
          <br />
          <span className="card-label">Category</span> :{' '}
          {props.data.internship_category}
          <br />
          <span className="card-label">Description</span> :{' '}
          {props.data.internship_description}
        </p>
      </div>
      {props.adminMode ? (
        <div className="form-row">
          <div className="col-auto">
            <NavLink to={`/admin/internships/edit/${props.data.id}`} class="btn btn-primary btn-sm">Edit</NavLink>
          </div>
          <div className="col-auto">
            <NavLink to="#" class="btn btn-primary btn-sm">Delete</NavLink>
          </div>
        </div>
      ) : ""}


    </div>
  );
};

export default Card;
