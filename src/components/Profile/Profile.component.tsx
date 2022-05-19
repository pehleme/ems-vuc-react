import { Fragment } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineCake } from "react-icons/md";

import { Box, Chip, Grid, Typography } from "@mui/material";

import { InfoBox } from "../Boxs";
import { Header } from "../Header";

const doctor = {
  name: "Dr. Lohran Anguera",
  crm: "00000000-0/BR",
  specialty: "Cardiologista",
  patients: 400,
  anvisaLetter: "está em dia",
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
            <Typography fontSize="14px" fontWeight="bold">
              Carta Anvisa
            </Typography>
            <Typography fontSize="14px" fontWeight="bold" color="primary">
              {doctor.anvisaLetter}
            </Typography>
            <Typography fontSize="12px" fontWeight="slim" color="gray">
              válida até 10/05/22
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3} px={2} borderLeft="1px solid #02568017">
          <Box display="flex" flexDirection="column">
            <Typography fontSize="14px">{doctor.email}</Typography>
            <Typography fontSize="14px" fontWeight="bold">
              {doctor.cellphone}
            </Typography>
            <Typography
              fontSize="14px"
              fontWeight="bold"
              color="primary"
              display="flex"
              alignItems="center"
            >
              <FaRegCheckCircle style={{ marginRight: 3 }} />
              Programa Alcance
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3} px={2}>
          <Box display="flex" flexDirection="column">
            <InfoBox label="Idade">{doctor.age} anos</InfoBox>
            <Typography
              fontSize="14px"
              fontWeight="bold"
              color="primary"
              display="flex"
              alignItems="center"
            >
              <MdOutlineCake style={{ marginRight: 3 }} />
              {doctor.birthday}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3} px={2}>
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
              </Box>
            </InfoBox>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export { Profile };
