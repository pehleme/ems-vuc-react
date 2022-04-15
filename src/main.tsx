import React from "react";
import ReactDOM from "react-dom";

import { App } from "~/App/App";
import "~/styles/index.css";

// ONLY USE FOR SANDBOX MODE
// import { makeServer } from "../server";

// if (import.meta.env.MODE === "sandbox") {
// makeServer();
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
