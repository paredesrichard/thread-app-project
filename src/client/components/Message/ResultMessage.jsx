import React, { Component } from 'react';

const ResultMessage = props => {
  return (
    <div className="bg-white container" role="alert">
      <h4 className="alert-heading">{props.message}</h4>
      <hr />
      <p className="mb-0">{props.messageBody}</p>
    </div>
  );
};

export default ResultMessage;