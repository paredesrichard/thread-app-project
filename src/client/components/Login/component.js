import React, { Component } from 'react';
//import SearchForm from '../SearchForm/SearchForm';
import './Login.css';
import { NavLink } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

class Login extends Component {
  state = {
    user: {
      email: '',
      password: '',
    },
  };

  onFieldChange = event => {
    const { name, value } = event.target;

    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
  };
  onSubmit = event => {
    event.preventDefault();

    fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(this.state.user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        return res.json();
      })
      .then(response => {
        console.log('Success:', JSON.stringify(response));
        localStorage.setItem('authToken', response.token);
        NotificationManager.success('You are now logged in');
        this.props.history.push('/');
      })
      .catch(error => {
        console.error('Error:', error);
        NotificationManager.error('You entered an invalid username/password');
      });
  };

  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.onSubmit}>
          <h2 className="text-center">Log in</h2>
          <div className="form-group">
            <input
              name="email"
              type="text"
              className="form-control"
              placeholder="Email address"
              required="required"
              onChange={this.onFieldChange}
              value={this.state.user.email}
            />
          </div>
          <div className="form-group">
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
              required="required"
              onChange={this.onFieldChange}
              value={this.state.user.password}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              Log in
            </button>
          </div>
          {/* <div className="clearfix">
            <NavLink to="#" className="text-primary">
              Forgot Password?
            </NavLink>
          </div> */}
        </form>
        {/* <p className="text-center">
          <NavLink to="#" className="text-primary">
            Create an Account
          </NavLink>
        </p> */}
      </div>
    );
  }
}
export default Login;
