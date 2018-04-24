import React, { Component } from "react";
import { Body } from "react-game-kit";
import Matter from "matter-js";
import Duck from "../Duck";

//import PhysicsBody from "./PhysicsBody";
//import Hit from "./Hit";
import KeyEvent from "../KeyEvent";
import Input from "../Input";

const WIDTH = 120;
const HEIGHT = 120;

class Mole extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: props.x,
      y: props.y
      //directionIndex: props.directionIndex,
      //moveLeft: false,
      //moveRight: true,
      //hasPhysics: false
    };

    this.update = this.update.bind(this);
  }

  componentDidMount() {
    React.Children.forEach(this.props.children, (child) => {
      if (child.type === KeyEvent) {
        const { onDown, onUp } = child.props;

        Input.key.on("down", (keyCode) => {
          if (onDown && typeof onDown === "function") {
            const onDownResult = onDown(keyCode, this.state);

            if (onDownResult) {
              this.setState((prevState) => {
                return { ...prevState, ...onDownResult };
              });
            }
          }
        });

        Input.key.on("up", (keyCode) => {
          if (onUp && typeof onUp === "function") {
            const onUpResult = onUp(keyCode, this.state);

            if (onUpResult) {
              this.setState((prevState) => {
                return { ...prevState, ...onUpResult };
              });
            }
          }
        });
     }
    });
    //Matter.Events.on(this.context.engine, "afterUpdate", this.update);
  }

  componentWillUnmount() {
    //Matter.Events.off(this.context.engine, "afterUpdate", this.update);

    Input.key.off("down");
    Input.key.off("up");
  }

  update() {
    const { onUpdate } = this.props;

    if (onUpdate && typeof onUpdate === "function") {
      const onUpdateResult = onUpdate(this.state);

      if (onUpdateResult) {
        this.setState((prevState) => {
          return { ...prevState, ...onUpdateResult };
        });
      }
    }

    if (this.body.body) {
      Matter.Body.setVelocity(this.body.body, { x: this.state.x, y: this.state.y });
    }
  }

  render() {
    const { children } = this.props;

    const styles = {
      position: "absolute",
      left: this.state.x,
      top: this.state.y,
      backgroundImage: `url(${require("../../images/image-for-README.jpg")})`,
      backgroundSize: "cover",
      width: WIDTH,
      height: HEIGHT
    };

    React.Children.forEach(children, (child) => {
      if (child.type === Duck) {
        //console.log("PLEASE WORK");
        styles.backgroundImage = `url(${require("../../../assets/images/image-for-README.jpg")})`;
      }

      if (child.type === 'Whacker') {
        styles.backgroundImage = `url(${require("../../../assets/images/mallet-image-for-PPs.png")})`;
      }

   });

    // if (this.state.hasPhysics) {
      return (
        <div style={styles}>
          <Body
            args={[this.state.x, this.state.y, WIDTH, HEIGHT]}
            ref={(b) => this.body = b }
          >
            <div>
              {children}
            </div>
          </Body>
        </div>
      );
    // }

    // return (
    //   <div style={styles}>{children}</div>
    // );
  }
}



export default Mole;
