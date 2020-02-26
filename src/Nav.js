import React from "react";
import { animated } from "react-spring";

export const Nav = ({ style }) => {
  return (
    <animated.div className="nav-wrapper" style={style}>
      <nav>
        <a href="#">Incio</a>
        <a href="#">Qgis</a>
        <a href="#">WebMapping</a>
      </nav>
    </animated.div>
  );
};
