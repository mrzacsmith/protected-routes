import React from "react";
import ReactDOM from "react-dom";
import { LandingPage } from "./LandingPage";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Protected Routes</h1>
      <LandingPage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
