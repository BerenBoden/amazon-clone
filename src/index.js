import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reducer, { initialState } from "./components/Provider/reducer";
import StateProvider from "./components/Provider/StateProvider";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
