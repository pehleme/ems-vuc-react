import { HashRouter } from "react-router-dom";

import { GlobalProvider } from "~/contexts";
import { Routes } from "~/routes/Routes";
import { theme } from "~/styles/mui/theme";
import { useRegisterSW } from "virtual:pwa-register/react";

import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";

function App() {
  useRegisterSW();

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <GlobalProvider>
            <CssBaseline />
            <Routes />
          </GlobalProvider>
        </StyledEngineProvider>
      </ThemeProvider>
    </HashRouter>
  );
}

export { App };
