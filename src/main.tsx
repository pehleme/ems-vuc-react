import "@fontsource/roboto";
import { StrictMode } from "react";
import { render } from "react-dom";

import { App } from "~/components";
import "~/libs/i18n";
// <--SANDBOX-->
import { MODE } from "~/utils/constants";

async function prepare() {
  if (MODE === "test") {
    const { worker } = await import("~/mocks/browser");
    return worker.start();
  }
  return Promise.resolve();
}
// <--SANDBOX-->

prepare().then(() => {
  render(
    <StrictMode>
      <App />
    </StrictMode>,
    document.getElementById("root"),
  );
});
