import React, { Component } from "react";
//import Air from "./components/Air";
//import LandingPage from "./components/LandingPage";
/*import Pellets from "./components/Pellets";*/
//import Sidebar from "./components/Sidebar";
//import Water from "./components/Water";
import Mole from "./components/Mole";
import Duck from "./components/Duck";
import Game from "./components/Game";
import "./App.css";

class App extends Component {
    //    state = {
    //       gameOn: true,
    //       foodCount: 0,
    //       food: [],
    //       x: 0,
    //       y: 0
    //     };
    //       componentDidMount() {
    //           this.updateCanvas();
    //       }
    //       updateCanvas() {
    //           //const ctx = this.refs.canvas.getContext('2d');
    //           //(vertical (X), horizontal (Y), width, height)
    //           // ctx.fillRect(175, 100, 100000, 100000);
    //           this.playGame();
    //       }
    //       Circle(x, y, r) {
    //         this.r = r;
    //       }
    //       playGame() {

    //              this.setState({food: this.newFood(this.state.food)})

    //              console.log(this.state.food);

    //       }
    //       newFood = food => {
    //           var vulpix = true;
    //           var x = 0;
    //           var y = 0;
    //           while (vulpix === true) {
    //               if (food.length < 1) {
    //                   x = Math.floor(Math.random() * (1875 - 175) + 175);
    //                   y = Math.floor(Math.random() * (850 - 100) + 100);
    //                   food[0] = ({"X": x, "Y": y, "R": 16});
    //               }
    //               else if (food.length < 10) {
    //                   x = Math.floor(Math.random() * (1875 - 175) + 175);
    //                   y = Math.floor(Math.random() * (850 - 100) + 100);
    //                   food[food.length] = ({"X": x, "Y": y, "R": 16});
    //               }
    //               else {
    //                   vulpix = false;
    //                   return food;
    //               }
    //       }
         // }
          render() {
              return (
                    //<canvas className="pickles" ref="canvas" width={1750} height={850}>
                    //    {/* {this.state.food.map(food => (
                    //      <Pellets/>
                    //   ))} */}
                    <Game>
                      <img src="../../images/image-for-README.jpg" alt = "Happy?"/>
                      {/* <Mole x={500} y={500}>
                        <Duck />
                        
                      </Mole> */}
                    </Game>
                     //    {/* <KeyEvent onDown={(keys, prevState)} => {
                    //         const state ={};
                    //         if (keys.indexOf(Key.w) >= 0) {
                    //             state.y = prevState.y -4;
                    //             state.directionIndex = 4;
                    //         }
                    //         return state;
                    //     } />  */}
                    //</canvas>
      
              );
          }



//   render() {
//     return (
//       <LandingPage>
//         <Water></Water>
//           <Air></Air>
//             <Sidebar></Sidebar>
//               </LandingPage>
//     );
//   }
}

export default App;
