import React, { Component } from 'react';
import Air from "./components/air";
import LandingPage from "./components/landingPage";
import Sidebar from "./components/sidebar";
import Water from "./components/water";
//import "" from "./ducks.json"; not sure we'll actually need
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
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

// Socket.io template code below
// Enclosing function
/*function() {

    IO {
        All code related to Socket.IO connections goes here.
    }

    App {
        Generic game logic code.

        Host {
            Game logic for the 'Host' (big) screen.
        }

        Player {
            Game logic specific to 'Player' screens.
        }
    }
}*/
