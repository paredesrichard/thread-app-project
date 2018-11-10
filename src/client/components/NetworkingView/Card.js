import React from 'react';
import './Card.css';
import {Link} from "react-router-dom";
/*
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

      <div className="form-row">
      <div className="col-auto">
        <Link
          to={`/networking/edit/${props.data.id}`}
          className="btn btn-primary mb-2"
          target="_blank">Edit</Link>
          </div>
          <div className="col-auto">
          <button  className="btn btn-primary mb-2" >
          Delete
        </button>
        </div>
      </div>
      
    </div>
  );
};
*/


class Card extends React.Component{
  constructor(props){
super(props);
  }
  deleteRecord(id) {
    console.log("deleting record id: ", id);

    fetch(`/api/networking/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.text())
      .then(response => {
        console.log('Success:', response)
        alert("Record has been deleted");
      })
      .catch(error => console.error('Error:', error));
  }

  render(){
    return (
      <div className="networking-card">
        <img
          src={this.props.data.organisation_logo}
          className="thumb-nail-img"
          alt="thumbnail"
        />
        <p>
          <span className="card-label">Sector</span> :{' '}
          {this.props.data.sector_activity}
          <br />
          <span className="card-label">Organisation Name</span> :{' '}
          {this.props.data.organisation_name}
          <br />
          <span className="card-label">Address</span> :{' '}
          {this.props.data.organisation_address}
          <br />
          <span className="card-label">Description</span> :{' '}
          {this.props.data.organisation_description}
        </p>
  
        <div className="form-row">
        <div className="col-auto">
          <Link
            to={`/networking/edit/${this.props.data.id}`}
            className="btn btn-primary mb-2"
            target="_blank">Edit</Link>
            </div>
    <div className="col-auto">
    <button class="btn btn-primary btn-sm" onClick={() => { if (window.confirm('Are you sure you wish to delete this record?')) this.deleteRecord(this.props.data.id) }}>Delete</button>
  </div>

        </div>
        
      </div>
    );
  }
}

export default Card;
