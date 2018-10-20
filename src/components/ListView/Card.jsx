import React from "react";
import "./Card.css";

const Card = props => {
  return (
    <div className="cards">
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
