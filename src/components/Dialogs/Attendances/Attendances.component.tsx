import { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";

import { SecretariesDialog } from "../Secretaries";

const attendances = [
  {
    name: "OrtoSP",
    active: true,
    address: "Rua Cincinato Braga, 340 São Paulo - SP, 6º andar",
    cellphone: "(11) 2123-4565",
    days: "Seg, ter, qua",
    startTime: 8,
    endTime: 11,
  },
  {
    name: "Consultório 2",
    active: false,
    address: "R. Oscar Freire, 1431 - cj 105 Pinheiros, SP",
    cellphone: "(11) 4125-7271",
    days: "Quinta-feira",
    startTime: 13,
    endTime: 15,
  },
  {
    name: "Consultório 3",
    active: false,
    address: "R. Martiniano de Carvalho, 864 - cj 602 - Bela Vista, SP",
    cellphone: "(11) 4326-5327",
    days: "Sexta-feira",
    startTime: 17,
    endTime: 18,
  },
];

function AttendancesDialog() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button onClick={handleOpen} variant="contained" fullWidth>
        ver mais
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Horários de atendimento</DialogTitle>
        <DialogContent>
          <Grid container spacing={5}>
            {attendances.map((item) => (
              <Grid key={item.name} xs={4} item>
                <Box
                  p={3}
                  borderRadius="16px"
                  border="1px solid #CFDFE7"
                  height="370px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    color={item.active ? "primary.dark" : "#CFDFE7"}
                  >
                    <HiOutlineLocationMarker fontSize="30px" />
                    {item.active && (
                      <Typography fontWeight="700">hoje</Typography>
                    )}
                  </Box>
                  <Typography fontWeight="700">{item.name}</Typography>
                  <Typography fontSize="14px" color="#25272A">
                    {item.address} <br />
                    Tel.: {item.cellphone}
                  </Typography>
                  <SecretariesDialog title={item.name} />
                  <Typography color="primary.dark" fontWeight="700">
                    {item.days}
                  </Typography>
                  <Typography color="primary.dark" fontSize="14px">
                    das {item.startTime} às {item.endTime}h
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export { AttendancesDialog };
