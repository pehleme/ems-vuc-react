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
  {
    name: "Gabriela Oliveira",
    age: 44,
    birthday: "18/09",
    email: "gabriela.oliveira@outlook.com.br",
    cellphone: "(11) 97482-1573",
  },
  {
    name: "Carol da Silva",
    age: 52,
    birthday: "04/10",
    email: "carol.silva@gmail.com",
    cellphone: "(11) 98842-4122",
  },
  {
    name: "Rebeca Castro",
    age: 24,
    birthday: "05/02",
    email: "rebecacastro@gmail.com",
    cellphone: "(13) 98415-6572",
  },
  {
    name: "Jaqueline de Souza",
    age: 30,
    birthday: "06/07",
    email: "jaque.souza@gmail.com",
    cellphone: "(11) 95523-1142",
  },
];

function SecretariesDialog({ title }: { title: string }) {
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
        <DialogTitle>Secretárias ({title})</DialogTitle>
        <DialogContent>
          <Grid container spacing={5}>
            {medicamentos.map((item) => (
              <Grid key={item.name} xs={6} item>
                <Box
                  px={6}
                  py={3}
                  borderRadius="16px"
                  border="1px solid #CFDFE7"
                >
                  <Typography fontSize="14px" fontWeight="700" mb={3}>
                    {item.name}
                  </Typography>
                  <InfoBox label="Idade">
                    {item.age} anos&nbsp;
                    <Box display="inline" color="primary.main">
                      <MdOutlineCake />
                      &nbsp;{item.birthday}
                    </Box>
                  </InfoBox>
                  <InfoBox label="E-mail">{item.email}</InfoBox>
                  <InfoBox label="Celular">{item.cellphone}</InfoBox>
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
