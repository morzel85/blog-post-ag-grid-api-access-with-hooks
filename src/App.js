import React from "react";
import "./App.css";

import AgGridWithUseState from "./grids/AgGridWithUseState";
import AgGridWithUseRef from "./grids/AgGridWithUseRef";

function App() {
  return (
    <div className="App">
      <AgGridWithUseState />
      <AgGridWithUseRef />
      <div className="about">
        <strong>Example app for <a href="https://morzel.net">morzel.net</a> blog post</strong><br/>
        Data: <a href="https://en.wikipedia.org/wiki/List_of_brightest_stars">List of brightest stars</a>
      </div>
    </div>
  );
}

export default App;
