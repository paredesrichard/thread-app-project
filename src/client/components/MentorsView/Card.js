import React from 'react';
import './Card.css';
import { Link, NavLink } from 'react-router-dom';
import LoginContext from '../../contexts/login';

import Modal from 'react-responsive-modal';

/*
const Card = props => {
  
  return (
    <div className="mentors-card">
      <img
        src={props.data.profile_picture}
        className="thumb-nail-img"
        alt="thumbnail"/>
      <p>
        <br/>
        <span className="card-label">First</span>
        :{' '} {props.data.first_name}
        <br/>
        <span className="card-label">Last Name</span>
        :{' '} {props.data.last_name}
        <br/>
        <span className="card-label">Email address</span>
        :{' '} {props.data.email}
        <br/>
        <span className="card-label">Description</span>
        :{' '} {props.data.mentor_description}
      </p>
      
      <div className="form-row">
      <div className="col-auto">
        <Link
          to={`/mentors/edit/${props.data.id}`}
          className="btn btn-primary mb-2"
          target="_blank">Edit</Link>
          </div>
          <Link to="#"  className="btn btn-primary mb-2">
          Delete
        </Link>
      </div>
      
    </div>
  );
};
*/

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  // deleteRecord = (id) => {
  //   console.log('deleting record id: ', id);

  //   fetch(`/api/mentors/${id}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then(res => res.text())
  //     .then(response => {
  //       console.log('Success:', response);
  //       this.props.history.push('/mentors');
  //     })
  //     .catch(error => console.error('Error:', error));
  // }

  render() {
    const contextType = LoginContext._currentValue;
    const keyId = Math.random();
    const { id, mentor } = this.props.data;
    return (
      <div className="card m-3 shadow-lg rounded  " style={{ maxWidth: `300px` }}>
        <img
          src={this.props.data.profile_picture}
          className="card-img-top"
          alt="thumbnail"
        />
        <div className="card-title text-left">
          <h4 className="card-title text-center">{`${this.props.data.first_name} ${
            this.props.data.last_name
          }`}</h4>
        </div>
        <div className="card-body text-left p-1">
          <p className="card-text">
            <span className="card-label">Email : </span>
            {this.props.data.email}
            <br />
            <span className="card-label">Offering: </span>
            {this.props.data.offering}
            <br />
          </p>
        </div>

        <div className="card-footer">
          <div className="d-flex">
            <button
              className="btn btn-info mr-auto"
              onClick={this.onOpenModal}
            >
              See Profile
            </button>
            {contextType.isLoggedIn ? (
              <React.Fragment>
                <Link
                  to={`/admin/mentors/edit/${this.props.data.id}`}
                  className="btn btn-primary mx-1 px-3"
                >
                  Edit
                </Link>
                <NavLink
                  className="btn btn-danger mx-1 px-2"
                  to={`/admin/mentors/delete/${id}`}
                >
                  Delete
                </NavLink>
              </React.Fragment>
            ) : (
              ''
            )}
          </div>
        </div>

        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <div className="card m-3" style={{ maxWidth: `450px` }}>
            <img
              src={this.props.data.profile_picture}
              className="card-img-top"
              alt="thumbnail"
            />
            <div className="card-title text-left">
              <h4 className="card-title text-center">{`${
                this.props.data.first_name
              } ${this.props.data.last_name}`}</h4>
            </div>
            <div className="card-body h-auto text-left p-1">
              <p className="card-text">
                <span className="card-label">Email : </span>
                {this.props.data.email}
                <br /> <br />
                <span className="card-label">Availability: </span>
                {this.props.data.availability}
                <br /> <br />
                <span className="card-label">Offering: </span>
                {this.props.data.offering}
                <br /> <br />
                <span className="card-label">Description: </span>
                {this.props.data.mentor_description}
                <br /> <br />
                <span className="card-label">Affiliation: </span>
                {this.props.data.affiliation}
                <br /> <br />
                <button type="button" className="btn btn-primary btn-block" onClick={() => this.onCloseModal() }>Close</button>
              </p>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Card;
