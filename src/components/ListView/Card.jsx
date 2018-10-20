import React from "react";
import "./Card.css";

const Card = props => {
  return (
    <div className="cards">
      <p>
        <span className="card-label">Name</span> : {props.data.event_name}
        <br />
        <span className="card-label">Type</span> : {props.data.event_type}
      </p>
    </div>
  );
};

export default Card;
