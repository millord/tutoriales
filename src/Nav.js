import React from "react";
import { animated } from "react-spring";

export const Nav = ({ style }) => {
  return (
    <animated.div className="nav-wrapper" style={style}>
      <nav>
        <a className="menu-links" href="#">
          Inicio
        </a>
        <a className="menu-links" href="#">
          Qgis
        </a>
        <a className="menu-links" href="#">
          WebMapping
        </a>
      </nav>
    </animated.div>
  );
};
