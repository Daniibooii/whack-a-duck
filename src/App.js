import React, { Component } from "react";
import Air from "./components/Air";
import LandingPage from "./components/LandingPage";
/*import Pellets from "./components/Pellets";*/
import Sidebar from "./components/Sidebar";
import Water from "./components/Water";
import "./index.css";
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/water" component={Water} />
        <Route path="/air" component={Air} />
        </div>
      </BrowserRouter>
          </div>
    );
  }
}

export default App;
