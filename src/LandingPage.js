import React, { Component } from 'react';
import './LandingPage.css';



class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage-main">
        <header className="LandingPage-header">
          <h1 className="LandingPage-title">Welcome to Whack-a-Duck!</h1>
        </header>
        <p className="LandingPage-intro">
          Please enter your name, then click start when ready.<hr />
          If you start as a <strong>whacker</strong>, get whacking!<br />
          Move with the mouse and use [button] to whack.
          If you start as a <strong>duck</strong>, eat the colored balls and avoid being whacked!<br />
          Use the mouse to move; hitting <strong>S</strong> will allow you to dive, but you can only hold your breath for so long.< br/>
          This game will test your <strong>react</strong>ions!
        </p>
        </div>
    );
  }
}




export default LandingPage;

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
