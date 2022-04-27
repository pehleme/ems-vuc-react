import { Outlet } from "react-router-dom";

import { Footer, Header } from "~/components";

import { Box } from "@mui/material";

function MainLayout() {
  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
}

export { MainLayout };
