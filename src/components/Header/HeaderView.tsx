import { FaArrowLeft, FaStar } from "react-icons/fa";
import { MdOutlineCake } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { InfoBox } from "~/components";

import { Box, Chip, Grid, IconButton, Typography } from "@mui/material";

function HeaderView() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <header>
      <Grid container height="70px" color="white">
        <Grid item xs={3} px={2} bgcolor="primary.dark">
          <Box
            onClick={handleBack}
            display="flex"
            alignItems="center"
            height="100%"
          >
            <IconButton>
              <FaArrowLeft color="white" fontSize="20px" />
            </IconButton>
            <Typography>Ficha do médico</Typography>
          </Box>
        </Grid>
        <Grid item xs={9} px={2} bgcolor="primary.main">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="100%"
          >
            <Typography fontSize="22px" fontWeight="bold">
              Dr. Lohran Anguera
            </Typography>
            <Typography fontSize="12px">CRM 00000000-0/BR</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        height="120px"
        display="flex"
        alignItems="center"
        bgcolor="white"
        boxShadow="0px 5px 6px #02568017"
      >
        <Grid item xs={3} px={2}>
          <Box display="flex" flexDirection="column">
            <InfoBox label="Especialidade">Ortopedia</InfoBox>
            <InfoBox label="Pacientes/mês">400</InfoBox>
            <InfoBox label="Carta Anvisa">em dia</InfoBox>
          </Box>
        </Grid>
        <Grid item xs={3} px={2}>
          <Box display="flex" flexDirection="column">
            <InfoBox label="Idade">
              44 anos&nbsp;
              <Box
                display="inline"
                sx={{
                  color: "primary.main",
                }}
              >
                <MdOutlineCake />
                &nbsp;30/03
              </Box>
            </InfoBox>
            <InfoBox label="E-mail">lohrana@gmail.com</InfoBox>
            <InfoBox label="Celular">(11) 9.7482-1573</InfoBox>
          </Box>
        </Grid>
        <Grid item xs={6} px={2}>
          <Box display="flex" flexDirection="column">
            <InfoBox label="Perfil médico" vertical>
              <Box display="flex" mt={1}>
                <Chip label="Paciência" color="primary" />
                <Chip label="Visual" color="primary" />
                <Chip
                  label="Dono"
                  color="secondary"
                  icon={<FaStar />}
                  sx={{ color: "white" }}
                />
                <Chip
                  label="Decisor"
                  color="secondary"
                  icon={<FaStar />}
                  sx={{ color: "white" }}
                />
              </Box>
            </InfoBox>
          </Box>
        </Grid>
      </Grid>
    </header>
  );
}

export { HeaderView };
