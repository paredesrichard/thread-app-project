import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Navmenu from './components/Navmenu/Navmenu';
// import SearchForm from './components/SearchForm/SearchForm';
import Footer from './components/Footer/Footer';
// import ListView from './components/ListView/ListView';
// import Calendar from './components/calendar/calendar';
import Homepage from './components/Homepage/Homepage';
import AboutUs from './components/AboutUs/AboutUs';
import EventsView from './components/EventsView/EventsView';
import InternshipsView from './components/InternshipsView/InternshipsView';
import MentorsView from './components/MentorsView/MentorsView';
import NetworkingView from './components/NetworkingView/NetworkingView';
//import NetworkingDetailedView from "./components/NetworkingView/NetworkingDetailedView";

import MentorForms from './components/add';

import NetworkingForms from './components/networkingForm';

import EventsForm from './components/EventsForm/EventsForm';
import EditEvents from './components/EventsForm/EditEvents';
import InternshipsForm from './components/InternshipsForm/InternshipsForm';
import AddInternship from './components/InternshipsForm/AddInternship';
import EditInternships from './components/InternshipsForm/EditInternships';
import DeleteRecord from './components/DeleteRecord/DeleteRecord';
import MentorSearch from './components/MentorsView/MentorSearch';
import NetworkingSearch from './components/NetworkingView/NetworkingSearch';
import Login from './components/Login';
import Logout from "./components/Logout/Logout";
import LoginContext, { loadContextValue } from './contexts/login';

import MentorsForm from './components/MentorsForm/MentorsForm';
import EditMentors from './components/MentorsForm/EditMentors';

// console.log(AddMentor);
class App extends Component {
  render() {
    const contextValue = loadContextValue();
    return (
      <div className="container-fluid m-0 p-0">
        <LoginContext.Provider value={contextValue}>
          <Header />
          <Navmenu />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/internships" component={InternshipsView} />
            <Route exact path="/admin/internships/add" component={InternshipsForm} />
            <Route exact path="/admin/internships/edit/:id" component={EditInternships} />
            <Route exact path="/admin/internships/delete/:id" component={DeleteRecord} />
            <Route exact path="/events" component={EventsView} />
            <Route exact path="/admin/events/add" component={EventsForm} />
            <Route exact path="/admin/events/edit/:id" component={EditEvents} />
            <Route exact path="/mentors" component={MentorsView} />
            <Route exact path="/admin/mentors/add" component={MentorsForm} />
            <Route exact path="/admin/mentors/edit/:id" component={EditMentors} />
            <Route exact path="/networking" component={NetworkingView} />
            <Route exact path="/about" component={AboutUs} />
            {/* <Route exact path="/mentors/add" component={MentorForms.AddMentor} /> 
            <Route exact path="/mentors/edit/:id" component={MentorForms.EditMentor} /> 
            <Route exact path="/Mentors/search" component={MentorSearch} /> */}
            <Route exact path="/networking/add" component={NetworkingForms.AddNetworking} />
            <Route exact path="/networking/edit/:id" component={NetworkingForms.EditNetworking} />
            <Route exact path="/Networking/search" component={NetworkingSearch} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
          </Switch>
          <Footer />
        </LoginContext.Provider>
      </div>
    );
  }
}

export default App;
