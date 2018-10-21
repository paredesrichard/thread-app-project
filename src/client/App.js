import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Navmenu from "./components/Navmenu/Navmenu";
// import SearchForm from "./components/SearchForm/SearchForm";
import Footer from "./components/Footer/Footer";
import ListView from "./components/ListView/ListView";

import { Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";

class App extends Component {
  render() {
    return (
      <div classNagme="grid-container">
        <Header />
        <Navmenu />
        {/* <SearchForm /> */}
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/events" component={ListView} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
