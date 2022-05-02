import { SyntheticEvent, useState } from "react";

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

function createData(date: string, notes: string) {
  return { date, notes };
}

const rows = [
  createData(
    "15/12/1998",
    "Reforçar XPTO. Perguntar se existe oportunidade com XYZ.",
  ),
  createData(
    "15/12/1998",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages. for 'lorem ipsum' will uncover many web sites still in their infancy.",
  ),
  createData("15/12/1998", "Falar sobre medicamento XPT. Perguntar sobre ABC."),
];

function NotesDialog() {
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
            <TableCell>Data</TableCell>
            <TableCell>Anotações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.notes}>
              <TableCell width={5}>{row.date}</TableCell>
              <TableCell>{row.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Box>
      <Button onClick={handleOpen} variant="contained" fullWidth>
        ver mais
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Anotações</DialogTitle>
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

export { NotesDialog };
