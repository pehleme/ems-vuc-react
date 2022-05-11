import "@fontsource/roboto";
import { StrictMode } from "react";
import { render } from "react-dom";

import { App } from "~/components";
import "~/libs/i18n";
// <--SANDBOX-->
import { MODE } from "~/utils/constants";

if (MODE === "test") {
  await import("~/../mocks/browser").then(({ worker }) => worker.start());
}
// <--SANDBOX-->

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root"),
);
