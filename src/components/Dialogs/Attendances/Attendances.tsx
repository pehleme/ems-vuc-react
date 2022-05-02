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

const medicamentos = [
  { name: "Medicamento 1", quantity: 12 },
  { name: "Medicamento 2", quantity: 8 },
  { name: "Medicamento 3", quantity: 4 },
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
            {medicamentos.map((item) => (
              <Grid key={item.name} xs={4} item>
                <Box p={3} borderRadius="16px" border="1px solid #CFDFE7">
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    color="primary.dark"
                  >
                    <HiOutlineLocationMarker fontSize="30px" />
                    <Typography fontWeight="700">Hoje</Typography>
                  </Box>
                  <Typography fontWeight="700">{item.name}</Typography>
                  <Typography fontSize="14px" color="#25272A">
                    Rua Cincinato Braga, 340São Paulo - SP, 6º andar <br />
                    Tel.: (11) 2123-4565
                  </Typography>
                  <SecretariesDialog />
                  <Typography color="primary.dark" fontWeight="700">
                    das 8 até 11h30
                  </Typography>
                  <Typography color="primary.dark" fontSize="14px">
                    das 8 <br /> até 11h30
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
