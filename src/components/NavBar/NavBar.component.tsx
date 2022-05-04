import { ElementType, ReactNode } from "react";
import { FaCheckCircle, FaChevronRight } from "react-icons/fa";

import { Box, Divider, Typography } from "@mui/material";

import {
  EmsHealthDialog,
  EventsDialog,
  MedExDialog,
  SamplesDialog,
} from "../Dialogs";

type NavBarItems = {
  title?: string;
  subtitle?: string;
  helper?: string;
  dialog?: ElementType<ReactNode>;
};

export function NavBar() {
  const menuItems: NavBarItems[] = [
    {
      title: "Eventos",
      subtitle: "Participe de Eventos",
      helper: "Ultima vez: 10/10/2021",
      dialog: EventsDialog,
    },
    {
      title: "EMS Saúde",
      subtitle: "Possui pacientes",
      helper: "36 utilizam atualmente",
      dialog: EmsHealthDialog,
    },
    {
      title: "MedEx",
      subtitle: "Possui cadastro",
      helper: "Último acesso: 10/10/2021",
      dialog: MedExDialog,
    },
    {
      title: "Amostras",
      helper: "Último entrega: 10/10/2021",
      dialog: SamplesDialog,
    },
  ];

  return (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="stretch"
      borderRight="1px solid #E0E0E0"
    >
      {menuItems.map(({ title, subtitle, helper, dialog }) => (
        <Box key={title} flex="1">
          <Box component={dialog}>
            <Box>
              <Typography fontWeight="700">{title}</Typography>
              {subtitle && (
                <Box display="flex" alignItems="center">
                  <FaCheckCircle color="green" />
                  <Typography fontWeight="700" fontSize="14px">
                    &nbsp;{subtitle}
                  </Typography>
                </Box>
              )}
              <Typography fontWeight="300" fontSize="12px">
                {helper}
              </Typography>
            </Box>
            <FaChevronRight />
          </Box>
          <Box mx={3}>
            <Divider />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
