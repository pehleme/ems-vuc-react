import { FaArrowLeft, FaStar } from "react-icons/fa";

import { InfoBox } from "~/components/Boxs";

import { Box, Chip, Grid, Typography } from "@mui/material";

function HeaderView() {
  return (
    <Box>
      <Box className="flex text-white" sx={{ height: 80 }}>
        <Grid container>
          <Grid
            item
            xs={3}
            className="flex items-center p-5 space-x-5 bg-primary-dark"
          >
            <FaArrowLeft className="text-2xl cursor-pointer" />
            <Typography className="text-lg">Ficha do médico</Typography>
          </Grid>
          <Grid
            item
            xs={9}
            className="flex flex-col justify-between p-5 bg-primary-main"
          >
            <Typography className="text-lg font-bold">
              Dr. Lohran Anguera
            </Typography>
            <Typography className="text-sm">CRM 00000000-0/BR</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        className="flex z-50 items-center bg-white shadow-lg"
        sx={{ height: 100 }}
      >
        <Grid container>
          <Grid item xs={3} className="flex-row justify-between px-5 space-y-1">
            <InfoBox label="Especialidade">Ortopedia</InfoBox>
            <InfoBox label="Pacientes/mês">400</InfoBox>
            <InfoBox label="Carta Anvisa">em dia</InfoBox>
          </Grid>
          <Grid
            item
            xs={3}
            className="flex-row justify-between px-5 space-y-1 border-l-2 border-gray-200"
          >
            <InfoBox label="Idade">
              <Box>30 anos</Box>
              <Box className="text-blue-400">30/03</Box>
            </InfoBox>
            <InfoBox label="E-mail">lohrana@gmail.com</InfoBox>
            <InfoBox label="Celular">(11) 97359-6482</InfoBox>
          </Grid>
          <Grid item xs={6} className="px-5">
            <InfoBox label="Perfil médico" orientation="vertical">
              <Box className="flex mt-2 space-x-2">
                <Chip label="Paciência" color="primary" />
                <Chip label="Visual" color="primary" />
                <Chip
                  label="Dono"
                  color="secondary"
                  icon={<FaStar />}
                  className="text-white"
                />
                <Chip
                  label="Decisor"
                  color="secondary"
                  icon={<FaStar />}
                  className="text-white"
                />
              </Box>
            </InfoBox>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export { HeaderView };
