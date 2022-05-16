import { Components } from "@mui/material";

const components: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      "html, body, #root": {
        height: "100%",
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      root: {
        ".MuiPaper-root": {
          borderRadius: "16px",
          padding: 20,
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
  MuiTab: {
    styleOverrides: {
      root: {
        fontWeight: 700,
        textTransform: "none",
      },
    },
  },
};

export { components };
