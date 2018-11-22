import React, { Component } from "react";
import { NotificationManager } from 'react-notifications';

class Logout extends Component {
  componentWillMount() {
    localStorage.removeItem('authToken');
    NotificationManager.info('You have successfully logged off the system.');
    this.props.history.push('/');
  }

  render() {
    return null;
  }
}

export default Logout;
