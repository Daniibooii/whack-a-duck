import React, { Component } from "react";
import Air from "./components/Air";
import LandingPage from "./components/LandingPage";
/*import Pellets from "./components/Pellets";*/
import Sidebar from "./components/Sidebar";
import Water from "./components/Water";
import "./index.css";

class App extends Component {
  render() {
    return (
      <LandingPage>
        <Water />
          <Air />
            <Sidebar />
              </LandingPage>
    );
  }
}

export default App;
