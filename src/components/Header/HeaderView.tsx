import { FaArrowLeft } from "react-icons/fa";

import { Box, Grid, IconButton, Typography } from "@mui/material";

function HeaderView() {
  return (
    <header>
      <Box>
        <Grid container height="70px" color="white">
          <Grid
            item
            xs={3}
            bgcolor="#0989C8"
            display="flex"
            alignItems="center"
          >
            <IconButton>
              <FaArrowLeft color="white" fontSize="20px" />
            </IconButton>
            <Typography>Ficha do médico</Typography>
          </Grid>
          <Grid
            item
            xs={9}
            bgcolor="#1F9CDA"
            display="flex"
            direction="column"
            justifyContent="center"
          >
            <Typography fontSize="22px" fontWeight="bold">
              Dr. Lohran Anguera
            </Typography>
            <Typography fontSize="12px">CRM 00000000-0/BR</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box boxShadow="0px 5px 6px #02568017">
        <Grid container display="flex" alignItems="center" height="120px">
          <Grid item xs={3} display="flex" direction="column">
            <span>Especialidade: Ortopedia</span>
            <span>Pacientes/mês: 400</span>
            <span>Carta Anvisa: em dia</span>
          </Grid>
          <Grid item xs={3} display="flex" direction="column">
            <span>Especialidade: Ortopedia</span>
            <span>Pacientes/mês: 400</span>
            <span>Carta Anvisa: em dia</span>
          </Grid>
          <Grid item xs={6} display="flex" direction="column">
            <span>Especialidade: Ortopedia</span>
            <span>Pacientes/mês: 400</span>
            <span>Carta Anvisa: em dia</span>
          </Grid>
        </Grid>
      </Box>
    </header>
  );
}

export { HeaderView };
