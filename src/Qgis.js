import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "@material-ui/core/Button";

const Qgis = () => {
  const [isButtonClick, setButtonClick] = useState(false);

  const { x } = useSpring({
    x: isButtonClick ? 0 : 100
  });

  return (
    <div>
      <h1>Qgis...</h1>
      <Button
        onClick={() => setButtonClick(!isButtonClick)}
        variant="contained"
        color="primary"
      >
        {isButtonClick ? (
          <div className="checkout">
            <animated.div
              style={{
                transform: x.interpolate(x => `translate3d(${x * -1}%, 0,0)`)
              }}
              className="checkout-left"
            ></animated.div>
            <div>
              <h1> Qgis 3.x basico</h1>
            </div>
            <animated.div
              style={{
                transform: x.interpolate(x => `translate3d(${x}%, 0,0)`)
              }}
              className="checkout-right"
            >
              <div>
                <h1> Aprende a lo basico del manejo de Qgis 3.x</h1>
                <ul>
                  <li>Entrar puntos a partir de un archivo de excel/csv</li>
                  <li>
                    Crear geometrias (puntos, lineas, poligonos) a partir del
                    archivo excel
                  </li>
                  <li>
                    Subir capas para verificar cercia a factores ambientalmente
                    sensibles
                  </li>
                  <li>Crear mapa con los datos analisados</li>
                </ul>
              </div>
            </animated.div>
          </div>
        ) : (
          "Ver detalles..."
        )}
      </Button>
    </div>
  );
};

export default Qgis;
