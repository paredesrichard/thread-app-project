import React from 'react';
import './Card.css';
import {Link} from "react-router-dom";

const Card = props => {
  return (
    <div className="mentors-card">
      <img
        src={props.data.profile_picture}
        className="thumb-nail-img"
        alt="thumbnail"
      />
      <p>
      
      <Link to={`/mentors/edit/${props.data.id}`} className="edit-mentor-link" target="_blank">Edit</Link>
      <br/>
         <span className="card-label">First</span> :{' '}
        {props.data.first_name}
        <br />
        <span className="card-label">Last Name</span> :{' '}
        {props.data.last_name}
        <br />
        <span className="card-label">Email address</span> :{' '}
        {props.data.email}
        <br />
        <span className="card-label">Description</span> :{' '}
        {props.data.mentor_description}
      </p>
      <div>
      <Link to="#" className="read-more">
      Read more...
    </Link>
    
    </div>
    </div>
  );
};

export default Card;
