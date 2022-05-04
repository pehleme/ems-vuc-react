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

function createData(date: string, access: number) {
  return { date, access };
}

const rows = [
  createData("março/2022", 5),
  createData("fevereiro/2022", 20),
  createData("janeiro/2022", 15),
  createData("dezembro/2021", 4),
];

function MedExDialog({ children }: { children?: ReactNode }) {
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
        p={3}
        sx={{ cursor: "pointer" }}
        onClick={handleOpen}
      >
        {children}
      </Box>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Médico Exponencial</DialogTitle>
        <DialogContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Data de acesso</TableCell>
                  <TableCell align="right">Acessos</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.date}>
                    <TableCell width={5}>{row.date}</TableCell>
                    <TableCell align="right">{row.access}</TableCell>
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

export { MedExDialog };
