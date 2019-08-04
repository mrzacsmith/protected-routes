import React from "react";
import auth from "./auth";

export const AppLayout = props => {
  return (
    <div>
      <h2>App Layout (Protected)</h2>
      <button
        onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Log Out
      </button>
    </div>
  );
};
