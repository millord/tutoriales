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
          Desarrolla tus habilidades utilizando <strong> Qgis</strong> para la
          parte de escritorio de análisis geospacial. Llega hasta el próximo
          nivel haciendo uso de{" "}
          <strong>React.js, Redux, Turf.js, Leaflet.js</strong> para crear mapas
          interactivos.
        </animated.p>
      </div>
    </div>
  );
};
