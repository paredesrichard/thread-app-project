import React from 'react';

const ConfirmDeletion = props => {
  setTimeout(() => {
    props.history.push(`/${props.origin}`);
  }, 3000);

  console.log(props);
  return (
    <div className="jumbotron px-5 bg-white">
      <h3 className="text-success">Record has been deleted.</h3>
      <p className="h4">You will be redirected automatically...</p>
    </div>
  );
};

export default ConfirmDeletion;
