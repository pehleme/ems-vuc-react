import { defineConfig } from "windicss/helpers";

import colors from "@mui/material/colors";

export default defineConfig({
  extract: {
    include: ["./index.html", "./src/**/*.tsx"],
  },
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: {
          main: "#1F9CDA",
          light: "rgb(75, 175, 225)",
          dark: "rgb(21, 109, 152)",
          contrastText: "#fff",
        },
      },
    },
  },
});
