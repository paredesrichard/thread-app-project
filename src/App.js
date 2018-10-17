import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <header>Header</header>
        <nav>Nav</nav>
        <div id="search-form">Search Form</div>
        <aside>Aside</aside>
        <section id="map-calendar-section">Map / Calendar Section</section>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
