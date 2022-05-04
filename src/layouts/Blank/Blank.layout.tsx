import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

function BlankLayout() {
  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Outlet />
    </Box>
  );
}

export { BlankLayout };
