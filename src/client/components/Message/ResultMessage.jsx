import React from 'react';

let resultsMessage = '';
let messageBody = '';

const ResultMessage = props => {
  console.log("ResultMessage received props:", props)
  switch (props.count) {
    case -2:
      resultsMessage = `Sorry, ${props.table} doesn't have any activity as of this moment.`;
      messageBody = 'Please check again tomorrow.';
      break;
    case -1:
      resultsMessage = 'Data is still loading. Please wait...';
      messageBody = '';
      break;
    case 0:
      resultsMessage = 'No matching record found.';
      messageBody = 'Please try again using a different keyword or category';
      break;
    case 1:
      resultsMessage = '1 record found.';
      messageBody = '';
      break;
    default:
      resultsMessage = props.count + ' records found.';
      messageBody = '';
  }

  return (
    <div className="bg-white container" role="alert" style={{ height: `100%` }}>
      <h4 className="alert-heading">{resultsMessage}</h4>
      <hr />
      <p className="mb-0">{messageBody}</p>
    </div>
  );
};

export default ResultMessage;
