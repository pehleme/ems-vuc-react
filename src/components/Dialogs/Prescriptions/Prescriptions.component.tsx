import { Fragment, useState } from "react";

import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const data = [
  {
    name: "1º Trimestre 2021",
    "Medicamento 1": 80,
    "Medicamento 2": 15,
    "Medicamento 3": 12,
    "Medicamento 4": 0,
  },
  {
    name: "2º Trimestre 2021",
    "Medicamento 1": 85,
    "Medicamento 2": 30,
    "Medicamento 3": 20,
    "Medicamento 4": 15,
  },
  {
    name: "3º Trimestre 2021",
    "Medicamento 1": 60,
    "Medicamento 2": 13,
    "Medicamento 3": 10,
    "Medicamento 4": 40,
  },
  {
    name: "4º Trimestre 2021",
    "Medicamento 1": 20,
    "Medicamento 2": 17,
    "Medicamento 3": 15,
    "Medicamento 4": 80,
  },
];

function PrescriptionsDialog() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Button onClick={handleOpen} variant="text" fullWidth>
        ver detalhes
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Histórico de prescrições</DialogTitle>
        <DialogContent>
          <Box width="100%" height="400px">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  axisLine={false}
                  padding={{ right: 20 }}
                />
                <YAxis
                  orientation="right"
                  tickLine={false}
                  axisLine={false}
                  padding={{ bottom: 30, top: 30 }}
                />
                <Tooltip />
                <Legend verticalAlign="top" />
                <Line
                  type="monotone"
                  dataKey="Medicamento 1"
                  stroke="#009488"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="Medicamento 2"
                  stroke="#6200EE"
                />
                <Line
                  type="monotone"
                  dataKey="Medicamento 3"
                  stroke="#EF630F"
                />
                <Line
                  type="monotone"
                  dataKey="Medicamento 4"
                  stroke="#FF6AA3"
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
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

export { PrescriptionsDialog };
