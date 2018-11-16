import React from 'react';
import './Card.css';
import moment from 'moment';

const Card = props => {
  return (
    <div className="events-card">
      <p>
        <span className="card-label">Name</span> : {props.data.event_name}
        <br />
        <span className="card-label">Type</span> : {props.data.event_type}
        <br />
        <span className="card-label">Start date:</span> : {moment(props.data.event_start_date).format('DD/MM/YYYY')}
      </p>
    </div>
  );
};

export default Card;
