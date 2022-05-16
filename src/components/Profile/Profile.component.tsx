import { Fragment } from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineCake } from "react-icons/md";

import { Box, Chip, Grid, Typography } from "@mui/material";

import { InfoBox } from "../Boxs";
import { Header } from "../Header";

const doctor = {
  name: "Dr. Lohran Anguera",
  crm: "00000000-0/BR",
  specialty: "Cardiologista",
  patients: 400,
  anvisaLetter: "em dia",
  age: 30,
  birthday: "22/10",
  email: "lohrana@gmail.com",
  cellphone: "(11) 97359-6482",
  profilesPDI: ["Paciência", "Visual"],
  profilesVAC: ["Dono", "Decisor"],
};

function Profile() {
  return (
    <Fragment>
      <Header
        onClickBack={() =>
          window.open("https://gleaming-dodol-2263c2.netlify.app", "_blank")
        }
        backText="Ficha do médico"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          height="100%"
        >
          <Typography fontSize="22px" fontWeight="bold">
            {doctor.name}
          </Typography>
          <Typography fontSize="12px">CRM {doctor.crm}</Typography>
        </Box>
      </Header>
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
            <InfoBox label="Especialidade">{doctor.specialty}</InfoBox>
            <InfoBox label="Pacientes/mês">{doctor.patients}</InfoBox>
            <InfoBox label="Carta Anvisa">{doctor.anvisaLetter}</InfoBox>
          </Box>
        </Grid>
        <Grid item xs={3} px={2} borderLeft="1px solid #02568017">
          <Box display="flex" flexDirection="column">
            <InfoBox label="Idade">
              {doctor.age} anos&nbsp;
              <Box display="inline" color="primary.main">
                <MdOutlineCake />
                &nbsp;{doctor.birthday}
              </Box>
            </InfoBox>
            <InfoBox label="E-mail">{doctor.email}</InfoBox>
            <InfoBox label="Celular">{doctor.cellphone}</InfoBox>
          </Box>
        </Grid>
        <Grid item xs={6} px={2}>
          <Box display="flex" flexDirection="column">
            <InfoBox label="Perfil médico" vertical>
              <Box display="flex" mt={1}>
                {doctor.profilesPDI.map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    color="primary"
                    sx={{ marginRight: 1 }}
                  />
                ))}
                {doctor.profilesVAC.map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    color="secondary"
                    icon={<FaStar />}
                    sx={{ color: "white", marginRight: 1 }}
                  />
                ))}
              </Box>
            </InfoBox>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export { Profile };
