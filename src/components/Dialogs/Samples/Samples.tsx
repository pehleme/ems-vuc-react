import { ReactNode, SyntheticEvent, useMemo, useState } from "react";

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

function createData(deliveryDate: string, name: string, quantity: number) {
  return { deliveryDate, name, quantity };
}

const rows = [
  createData("10/03/22", "Medicamento 1", 1),
  createData("22/02/22", "Medicamento 2", 2),
  createData("01/01/22", "Medicamento 3", 1),
  createData("01/12/21", "Medicamento 4", 5),
];

function SamplesDialog({ children }: { children?: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("1");

  const activeRows = useMemo(() => {
    const half = Math.ceil(rows.length / 2);

    const firstHalf = rows.slice(0, half);
    const secondHalf = rows.slice(-half);

    return activeTab === "1" ? firstHalf : secondHalf;
  }, [activeTab]);

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
          {activeRows.map((row) => (
            <TableRow key={row.name}>
              <TableCell width={5}>{row.deliveryDate}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
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
              <TabList onChange={handleChangeTab}>
                <Tab label="Minhas" value="1" />
                <Tab label="Colegas" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ px: 0 }}>
              {table}
            </TabPanel>
            <TabPanel value="2" sx={{ px: 0 }}>
              {table}
            </TabPanel>
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
