import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Navmenu from "./components/Navmenu/Navmenu";
import SearchForm from "./components/SearchForm/SearchForm";
import Footer from "./components/Footer/Footer";
import ListView from "./components/ListView/ListView";
import MapComponent from "./components/MapComponent/MapComponent";

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <Header />
        <Navmenu />
        <SearchForm />
        <ListView />
        <section>
          <MapComponent />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
