import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Routes } from "~/routes/Routes";
import { PhysicianService } from "~/services";
import { theme } from "~/styles/theme";
import { useRegisterSW } from "virtual:pwa-register/react";

import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  useRegisterSW();

  const loadAll = async () => {
    const physician = await PhysicianService.findAll();
    console.log(physician);
  };

  useEffect(() => {
    loadAll();
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </Router>
  );
}

export { App };
