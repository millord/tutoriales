import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import Qgis from "./Qgis";
import Web from "./Web";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/qgis" component={Qgis} />
            <Route path="/web" component={Web} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
