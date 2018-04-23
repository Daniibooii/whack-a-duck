import React, { Component } from 'react';
import Air from "./components/Air";
import LandingPage from "./components/LandingPage";
import Sidebar from "./components/Sidebar";
import Water from "./components/Water";
//import "" from "./ducks.json"; not sure we'll actually need
import './App.css';

class App extends Component {

  state = {
    gameOn: true,
    foodCount: 0,
    food: [],
    x: 0,
    y: 0
  };
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        // (vertical (X), horizontal (Y), width, height)
        ctx.fillRect(175, 100, 100000, 100000);
        this.playGame();
    }
    Circle(x, y, r) {
      //this.pos = createVector(x, y);
      this.r = r;
      //this.vel = createVector(0,0);
    }
    playGame() {
      
      // for (var i=0; i<10; i++) {
        
        
      // }
       //while (gameOn === true) {
         //if (food.length < 10) {
           this.setState({food: this.newFood(this.state.food)})
      //     x = Math.floor(Math.random() * (1875 - 175) + 175);
      //     y = Math.floor(Math.random() * (850 - 100) + 100);
      //     console.log("Hello X= " + x + " and Y= " + y);
          
         //}
      //   else {
           console.log(this.state.food);
      //     gameOn = false;
      //   }
        //Math.random() * (max - min) + min;
     // }
    }
    newFood = food => {
        var vulpix = true;
        var x = 0;
        var y = 0;
        while (vulpix === true) {
            if (food.length < 1) {
                x = Math.floor(Math.random() * (1875 - 175) + 175);
                y = Math.floor(Math.random() * (850 - 100) + 100);
                food[0] = ({"X": x, "Y": y, "R": 16});
            }
            else if (food.length < 10) {
                x = Math.floor(Math.random() * (1875 - 175) + 175);
                y = Math.floor(Math.random() * (850 - 100) + 100);
                food[food.length] = ({"X": x, "Y": y, "R": 16});
            }
            else {
                vulpix = false;
                return food;
            }
    }
    }
    render() {
        return (
            <canvas className="pickles" ref="canvas" width={1750} height={850}>
                {/* {this.state.food.map(food => (
                    <Pellets/>
                ))} */}
            </canvas>

        );
    }
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <h1 className="App-title">Welcome to React</h1>
  //       </header>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   );
  // }
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
