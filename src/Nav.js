import React from "react";
import { animated } from "react-spring";
import { NavLink } from "react-router-dom";

export const Nav = ({ style }) => {
  return (
    <animated.div className="nav-wrapper" style={style}>
      <nav>
        <NavLink to="/qgis">Qgis</NavLink>
        <NavLink to="/arcgis">ArcGis JS api</NavLink>
        <NavLink to="/web">WebMapping</NavLink>
        <NavLink to="#">D3</NavLink>
      </nav>
    </animated.div>
  );
};
