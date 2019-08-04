import React from "react";
import auth from "./auth";

export const LandingPage = props => {
  return (
    <div>
      <h2>LandingPage (Public)</h2>
      <button
        onClick={() => {
          auth.login(() => {
            props.history.push("/app");
          });
        }}
      >
        Log In
      </button>
    </div>
  );
};
