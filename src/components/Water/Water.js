import React from "react";
import "./Water.css";
import BackgroundImage from '../../images/fullimage.png';

const Water = props => (
  <section style={{width: '100%', height: '100%', backgroundImage:`url(${BackgroundImage})`}}>
  <img src={BackgroundImage} />
  </section>
);

export default Water;
