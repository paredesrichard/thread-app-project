import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Navmenu from "./components/Navmenu/Navmenu";
import SearchForm from "./components/SearchForm/SearchForm";

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <Header />
        <Navmenu />
        <SearchForm />
        <aside>Aside</aside>
        <section id="map-calendar-section">Map / Calendar Section</section>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
