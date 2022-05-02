import { useState } from "react";
import { MdOutlineCake } from "react-icons/md";

import { InfoBox } from "~/components";

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
];

function SecretariesDialog() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button onClick={handleOpen} variant="outlined" fullWidth>
        ver secretárias
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Secretárias (Nome clínica)</DialogTitle>
        <DialogContent>
          <Grid container spacing={5}>
            {medicamentos.map((item) => (
              <Grid key={item.nome} xs={6} item>
                <Box
                  px={6}
                  py={3}
                  borderRadius="16px"
                  border="1px solid #CFDFE7"
                >
                  <Typography fontSize="14px" fontWeight="700" mb={3}>
                    {item.nome}
                  </Typography>
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
                  <InfoBox label="E-mail">
                    gabriela.oliveira@outlook.com.br
                  </InfoBox>
                  <InfoBox label="Celular">(11) 9.7482-1573</InfoBox>
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

export { SecretariesDialog };
