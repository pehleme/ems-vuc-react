import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1F9CDA",
    },
    secondary: {
      main: "#FFAA00",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "html, body, #root": {
          height: "100%",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          ".MuiPaper-root": {
            borderRadius: "16px",
          },
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontWeight: 700,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          ".MuiTableCell-head": {
            fontWeight: 700,
            color: "#6B6B6D",
          },
        },
      },
    },
  },
});

export { theme };
