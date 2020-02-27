import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Nav } from "./Nav";
import { Toggle } from "./Toggle";
const Home = () => {
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
        <nav className="navbar navbar-light bg-dark navbar-expand-lg fixed-top">
          <a href="#" className="navbar-brand">
            <h1>MapLord</h1>
          </a>
        </nav>

        <button onClick={() => setNavOpen(!isNavOpen)} className="menu-button">
          Cursos
        </button>
        <Nav style={navAnimation} />
      </header>
      <main>
        <Toggle />
      </main>
    </animated.div>
  );
};

export default Home;
