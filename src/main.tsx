import "@fontsource/roboto";
import { StrictMode } from "react";
import { render } from "react-dom";

import "virtual:windi.css";
import { App } from "~/components";
import "~/styles/index.css";

// ONLY USE FOR SANDBOX MODE
// import { makeServer } from "~server";

// if (import.meta.env.MODE === "sandbox") {
//   makeServer();
// }

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root"),
);
