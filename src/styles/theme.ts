import { createTheme } from "@mui/material";

import { components } from "./components";
import { palette } from "./palette";

const theme = createTheme({
  palette,
  components,
});

export { theme };
