import "@fontsource/roboto";
import { StrictMode } from "react";
import { render } from "react-dom";

import { App } from "~/components";
import "~/i18n";
// ONLY USE FOR SANDBOX MODE
// import { MODE } from "~/utils/constants";

// import { makeServer } from "../mock";

// if (MODE === "sandbox") {
//   makeServer();
// }

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root"),
);
