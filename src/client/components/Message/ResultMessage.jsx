import React, { Component } from 'react';

const ResultMessage = props => {
  return (
    <div class="bg-light container" role="alert">
      <h4 class="alert-heading">{props.message}</h4>
      <hr />
      <p class="mb-0">{props.messageBody}</p>
    </div>
  );
};

export default ResultMessage;