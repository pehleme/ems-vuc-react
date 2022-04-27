import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

import { Header } from "./Header";

function CoreLayout() {
  return (
    <Box className="h-full">
      <Header />
      <Outlet />
    </Box>
  );
}

export { CoreLayout };
