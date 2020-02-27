import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "@material-ui/core/Button";

const Qgis = ({ isOpen }) => {
  const [isToggle, setIsToggle] = useState(false);

  const { x } = useSpring({
    x: isOpen ? 0 : 100
  });

  return (
    <div>
      <h1>Qgis...</h1>
      <Button
        onClick={() => setIsToggle(!isToggle)}
        variant="contained"
        color="primary"
      >
        {isToggle ? "Ocultar detalles..." : "Ver detalles..."}
      </Button>
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
    </div>
  );
};

export default Qgis;
