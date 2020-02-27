import React from "react";
import { animated } from "react-spring";
import { NavLink } from "react-router-dom";

export const Nav = ({ style }) => {
  return (
    <animated.div className="nav-wrapper" style={style}>
      <nav>
        <NavLink to="/qgis">Qgis</NavLink>
        <NavLink to="/web">WebMapping</NavLink>
      </nav>
    </animated.div>
  );
};
