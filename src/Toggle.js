import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

export const Toggle = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [isColorImportant, setColorImportant] = useState(false);
  const fade = useSpring({ opacity: isToggle ? 1 : 0 });
  const changeColor = useSpring({ color: isColorImportant ? "blue" : "red" });

  return (
    <div>
      <animated.h1 style={fade}>Hello</animated.h1>
      <button onClick={() => setIsToggle(!isToggle)}>
        {isToggle ? "Leer menos.." : "Leer mas..."}
      </button>
      <p></p>
      <button onClick={() => setColorImportant(!isColorImportant)}>
        {isColorImportant
          ? "Cambiar texto a rojo.."
          : "Cambiar texto a azul..."}
      </button>
      <animated.p style={changeColor}>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        suscipit vestibulum lacus, in tincidunt ante vestibulum sed. Phasellus
        eget purus quis nisl sodales auctor sed a felis. Fusce id elit eget ex
        rutrum placerat id vel metus. Vestibulum a consectetur neque, at
        scelerisque ipsum. Cras id dui felis. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas.
        Praesent non vulputate elit. Sed sagittis eros id neque malesuada
        iaculis. Sed eleifend neque vel sem eleifend, in sagittis orci maximus.
        Morbi ante felis, euismod non urna quis, iaculis facilisis nulla. In
        faucibus, turpis eget convallis convallis, orci dui convallis justo, nec
        euismod lorem ante eget metus. In id nibh venenatis, consequat ipsum
        vel, condimentum urna. Duis ut tempor libero. Duis ut placerat justo.
        Duis lobortis porta ultrices. Nam quis auctor neque.
      </animated.p>
    </div>
  );
};
