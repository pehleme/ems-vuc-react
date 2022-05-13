import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// import { Database } from "~/libs/database";
import { Routes } from "~/routes/Routes";
import { PhysicianService } from "~/services";
import { theme } from "~/styles/theme";
import { useRegisterSW } from "virtual:pwa-register/react";

import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  useRegisterSW();

  const loadAll = async () => {
    const [physician] = await PhysicianService.findAll();
    // const db = await Database.get();
    // const foundPhysician = await db.physician.findOne().exec();
    // console.log(foundPhysician?.name);

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
