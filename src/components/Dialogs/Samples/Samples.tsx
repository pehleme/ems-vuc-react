import { ReactNode, SyntheticEvent, useState } from "react";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread1", 356, 16.0, 49, 3.9),
  createData("Gingerbread2", 356, 16.0, 49, 3.9),
  createData("Gingerbread3", 356, 16.0, 49, 3.9),
];

function SamplesDialog({ children }: { children?: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("1");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeTab = (_: SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  const table = (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Entrega</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Quantidade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

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
        <DialogTitle>Amostras</DialogTitle>
        <DialogContent>
          <TabContext value={activeTab}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChangeTab}
                aria-label="lab API tabs example"
              >
                <Tab label="Minhas" value="1" />
                <Tab label="Colegas" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">{table}</TabPanel>
            <TabPanel value="2">{table}</TabPanel>
          </TabContext>
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

export { SamplesDialog };
