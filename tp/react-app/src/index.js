import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import "./index.css";
import { StateComponent } from "./StateComponent";

ReactDOM.render(
  <div>
    <Hello nam="toto" />
    <StateComponent />
  </div>,
  document.getElementById("root")
);
