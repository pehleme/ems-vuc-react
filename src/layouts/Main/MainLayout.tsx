import { Outlet } from "react-router-dom";

import { Header } from "~/components";

import { Box, Grid } from "@mui/material";

function MainLayout() {
  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Header />
      <Grid container height="100%">
        <Grid item xs={3}>
          teste
        </Grid>
        <Grid item xs={9}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}

export { MainLayout };
