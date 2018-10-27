import React from 'react';
import './Card.css';

const Card = props => {
  return (
    <div className="networking-card">
      <img
        src={props.data.organisation_logo}
        className="thumb-nail-img"
        alt="thumbnail"
      />
      <p>
        <span className="card-label">Sector</span> :{' '}
        {props.data.sector_activity}
        <br />
        <span className="card-label">Organisation Name</span> :{' '}
        {props.data.organisation_name}
        <br />
        <span className="card-label">Address</span> :{' '}
        {props.data.organisation_address}
        <br />
        <span className="card-label">Description</span> :{' '}
        {props.data.organisation_description}
      </p>
    </div>
  );
};

export default Card;
