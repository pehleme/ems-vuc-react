import { ReactNode, useState } from "react";

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

const medicamentos = [
  { nome: "Medicamento 1", quantity: 12 },
  { nome: "Medicamento 2", quantity: 8 },
  { nome: "Medicamento 3", quantity: 4 },
  { nome: "Medicamento 4", quantity: 1 },
  { nome: "Medicamento 5", quantity: 0 },
  { nome: "Medicamento 6", quantity: 0 },
];

function EmsHealthDialog({ children }: { children?: ReactNode }) {
  const [open, setOpen] = useState(false);

  const total = medicamentos.reduce((sum, { quantity }) => sum + quantity, 0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box height="100%">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        p={3}
        sx={{ cursor: "pointer" }}
        onClick={handleOpen}
      >
        {children}
      </Box>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>EMS Saúde</DialogTitle>
        <DialogContent>
          <Grid container spacing={5}>
            {medicamentos.map((item) => (
              <Grid key={item.nome} xs={4} item>
                <Box
                  px={6}
                  py={3}
                  borderRadius="16px"
                  border="1px solid #CFDFE7"
                >
                  <Typography
                    fontSize="14px"
                    color="primary.dark"
                    fontWeight="700"
                  >
                    {item.nome}
                  </Typography>
                  <Typography fontSize="24px" fontWeight="700">
                    {item.quantity}
                  </Typography>
                  <Typography fontSize="14px" color="#909090">
                    pacientes
                  </Typography>
                </Box>
              </Grid>
            ))}

            <Grid xs={12} item>
              <Typography
                fontSize="18px"
                color="#909090"
                fontWeight="700"
                align="right"
              >
                Total: {total} pacientes
              </Typography>
            </Grid>
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

export { EmsHealthDialog };
