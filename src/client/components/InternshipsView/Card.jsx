import React from 'react';
import './Card.css';

const Card = props => {
  return (
    <div className="cards">
      <img
        src={props.data.internship_theme_image}
        className="thumb-nail-img"
        alt="thumbnail"
      />
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
  );
};

export default Card;
