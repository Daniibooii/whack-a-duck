import React from "react";
import { Loop, Stage, World } from "react-game-kit";

const Game = ({ children }) => (
  <Loop>
    <Stage width={1500} height={1000}>
      <World>
        {children}
      </World>
    </Stage>
  </Loop>
);

export default Game;
