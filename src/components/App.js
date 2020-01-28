import "./App.scss";

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import FirstPage from "./FirstPage/FirstPage";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import SecondPage from "./SecondPage/SecondPage";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <HeaderMenu />
          <Route path="/" exact component={FirstPage} />
          <Route path="/second" component={SecondPage} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
