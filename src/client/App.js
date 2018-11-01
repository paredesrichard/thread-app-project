import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Navmenu from './components/Navmenu/Navmenu';
// import SearchForm from './components/SearchForm/SearchForm';
import Footer from './components/Footer/Footer';
import ListView from './components/ListView/ListView';
// import Calendar from './components/calendar/calendar';
import Homepage from './components/Homepage/Homepage';
import AboutUs from './components/AboutUs/AboutUs';
import EventsView from './components/EventsView/EventsView';
import InternshipsView from './components/InternshipsView/InternshipsView';
import MentorsView from './components/MentorsView/MentorsView';
import NetworkingView from './components/NetworkingView/NetworkingView';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Navmenu />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/internships" component={InternshipsView} />
          <Route exact path="/events" component={EventsView} />
          <Route exact path="/mentors" component={MentorsView} />
          <Route exact path="/networking" component={NetworkingView} />
          <Route exact path="/about" component={AboutUs} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
