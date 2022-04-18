import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "virtual:windi.css";
import { App } from "~/App/App";
import "~/styles/index.css";
// ONLY USE FOR SANDBOX MODE
import { makeServer } from "~server";

if (import.meta.env.MODE === "sandbox") {
  makeServer();
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root"),
);
