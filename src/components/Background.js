import React from "react";

const World = () => (
  <div style={{
    position: "absolute",
    backgroundImage: `url(${require('../../images/skyBackground.PNG')})`,
    backgroundSize: "cover",
    width: "100%",
    height: "100%" }}
  />
);

export default World;
