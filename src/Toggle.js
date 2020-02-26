import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "@material-ui/core/Button";

export const Toggle = () => {
  const [isToggle, setIsToggle] = useState(false);
  const fade = useSpring({ opacity: isToggle ? 1 : 0 });

  return (
    <div>
      <h1>Aprende sobre GIS y Webmapping de la manera mas efectiva</h1>
      <Button
        onClick={() => setIsToggle(!isToggle)}
        variant="contained"
        color="primary"
      >
        {isToggle ? "Leer menos.." : "Leer mas..."}
      </Button>
      <div style={{ textAlign: "justify" }} className="App-header">
        <animated.p style={fade}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </animated.p>
      </div>
    </div>
  );
};
