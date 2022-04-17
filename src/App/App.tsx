import { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";

import { fetchFindTodos } from "~/components";
import { GlobalProvider } from "~/contexts";
import { TodoModel } from "~/data/models";
import { theme } from "~/styles/mui/theme";
import { tw } from "twind";

import { Box, CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [todos, setTodos] = useState<TodoModel[]>([]);

  const loadTodos = async () => {
    const data = await fetchFindTodos();
    setTodos(data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  // console.log(todos);

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <GlobalProvider>
          <Box className="container flex flex-col p-5 mx-auto space-y-5 bg-slate-100">
            {todos.map(({ title, description, id, color }) => (
              <Box
                key={id}
                sx={{ borderColor: color, color }}
                className={tw`bg-white shadow-lg p-5 border-l-4 rounded-lg flex flex-row font-bold text-center uppercase`}
              >
                <div>{title}</div>
                <div>{description}</div>
              </Box>
            ))}
          </Box>
          <CssBaseline />
          {/* <Routes /> */}
        </GlobalProvider>
      </ThemeProvider>
    </HashRouter>
  );
}

export { App };
