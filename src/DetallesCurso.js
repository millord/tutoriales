import React from "react";
import { useSpring, animated } from "react-spring";

export const DetallesCurso = ({ isOpen }) => {
  const { x } = useSpring({
    x: isOpen ? 0 : 100
  });
  return (
    <div className="checkout">
      <animated.div
        style={{
          transform: x.interpolate(x => `translate3d(${x * -1}%, 0,0)`)
        }}
        className="checkout-left"
      ></animated.div>
      <animated.div
        style={{
          transform: x.interpolate(x => `translate3d(${x}%, 0,0)`)
        }}
        className="checkout-right"
      ></animated.div>
    </div>
  );
};
