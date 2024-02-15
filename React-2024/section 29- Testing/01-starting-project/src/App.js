import React from "react";

import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/greeting";
import Async from "./components/Async";

function App() {
  return (
    <div className="App">
      <Async />
      <Greeting />
    </div>
  );
}

export default App;
