import { Fragment, SyntheticEvent, useMemo, useState } from "react";

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

function createData(date: string, notes: string, propagandist?: string) {
  return { date, notes, propagandist };
}

const rows = [
  createData("10/03/22", "A dra. gosta de flores, especialmente orquideas"),
  createData("22/02/22", "A mãe da dra. usa medicamento ABC"),
  createData("01/01/22", "A dra. gosta de flores, especialmente orquideas"),
  createData("01/12/21", "A mãe da dra. usa medicamento ABC", "Amanda Castro"),
  createData(
    "01/11/21",
    "A dra. gosta de flores, especialmente orquideas",
    "Gabriel Santos",
  ),
  createData("01/10/21", "A mãe da dra. usa medicamento ABC", "Pedro Silva"),
];

function NotesDialog() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("1");

  const isColleague = activeTab === "2";

  const activeRows = useMemo(() => {
    const half = Math.ceil(rows.length / 2);

    const firstHalf = rows.slice(0, half);
    const secondHalf = rows.slice(-half);

    return isColleague ? secondHalf : firstHalf;
  }, [isColleague]);

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
            {isColleague && <TableCell>Propagandista</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {activeRows.map((row) => (
            <TableRow key={row.date}>
              <TableCell width={5}>{row.date}</TableCell>
              <TableCell>{row.notes}</TableCell>
              {isColleague && <TableCell>{row.propagandist}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Fragment>
      <Button onClick={handleOpen} variant="contained" fullWidth>
        ver mais
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Anotações</DialogTitle>
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
    </Fragment>
  );
}

export { NotesDialog };
