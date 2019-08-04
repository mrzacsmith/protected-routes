import React from "react";
import ReactDOM from "react-dom";
import { LandingPage } from "./LandingPage";
import { AppLayout } from "./AppLayout";
import { ProtectedRoute } from "./ProtectedRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Protected Routes</h1>
      <Route exact path="/" component={LandingPage} />

      <ProtectedRoute exact path="/app" component={AppLayout} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
