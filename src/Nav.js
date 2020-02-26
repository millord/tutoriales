import React from "react";
import { animated } from "react-spring";

export const Nav = ({ style }) => {
  return (
    <animated.div className="nav-wrapper" style={style}>
      <nav>
        <a href="#">Home</a>
        <a href="#">Map</a>
        <a href="#">Contact</a>
      </nav>
    </animated.div>
  );
};
