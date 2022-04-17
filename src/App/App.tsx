import { BrowserRouter as Router } from "react-router-dom";

import { fetchFindTodos } from "~/components";
import { GlobalProvider } from "~/contexts";
import { Routes } from "~/routes/Routes";
import { theme } from "~/styles/mui/theme";

import { ThemeProvider } from "@mui/material";

function App() {
  const teste = async () => {
    try {
      const x = await fetchFindTodos();
      console.log(x);
    } catch (error) {
      //
    }
  };

  teste();

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
