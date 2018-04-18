import React, { Component } from 'react';
import logo from './logo.svg'; //do we want to remove the logo?
import pickles from "./components/air";
import pickles from "./components/landingPage";
import pickles from "./components/sidebar";
import pickles from "./components/water";
import pickles from "./ducks.json"; //not sure we'll actually need
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
