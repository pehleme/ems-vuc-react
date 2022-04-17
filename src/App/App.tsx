import { BrowserRouter as Router } from "react-router-dom";

import { GlobalProvider } from "~/contexts";
import { Routes } from "~/routes/Routes";
import { theme } from "~/styles/mui/theme";

import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalProvider>
          <Routes />
        </GlobalProvider>
      </ThemeProvider>
    </Router>
  );
}

export { App };
