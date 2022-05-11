import { ReactNode, useState } from "react";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function createData(
  date: string,
  name: string,
  type: string,
  permanence: string,
) {
  return {
    date,
    type,
    name,
    permanence,
  };
}

const rows = [
  createData("10/03/22", "Palestra", "Palestra sobre ABC", "1h40 min"),
  createData("22/02/22", "Palestra", "Palestra sobre ABC", "30 min"),
  createData("01/01/22", "Simpósio", "Simpósio XPTO", "2h10 min"),
  createData("01/12/21", "Conferência", "Conferência ABC", "10 min"),
  createData("01/11/21", "Simpósio", "Simpósio XPTO", "2h10 min"),
];

function EventsDialog({ children }: { children?: ReactNode }) {
  const [open, setOpen] = useState(false);

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
        px={3}
        sx={{ cursor: "pointer" }}
        onClick={handleOpen}
      >
        {children}
      </Box>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Eventos</DialogTitle>
        <DialogContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Data</TableCell>
                  <TableCell>Tipo</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell align="right">Permanência</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.date}>
                    <TableCell width={5}>{row.date}</TableCell>
                    <TableCell>{row.type}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell align="right">{row.permanence}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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

export { EventsDialog };
