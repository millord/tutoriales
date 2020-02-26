import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSpring, animated } from "react-spring";
import { Toggle } from "./Toggle";
import { Nav } from "./Nav";

const App = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0, 0,0) scale(1)`
      : `translate3d(100%, 0,0) scale(0.6)`
  });
  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img src={logo} className="logo" />
        <button onClick={() => setNavOpen(!isNavOpen)} className="menu-button">
          Cursos
        </button>
        <Nav style={navAnimation} />
      </header>
      <Toggle />
    </animated.div>
  );
};

export default App;
