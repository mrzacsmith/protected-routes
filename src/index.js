import React from "react";
import ReactDOM from "react-dom";
import { LandingPage } from "./LandingPage";
import { AppLayout } from "./AppLayout";
import { ProtectedRoute } from "./ProtectedRoute";
import { Navbar } from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">

      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <ProtectedRoute exact path="/app" component={AppLayout} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
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
