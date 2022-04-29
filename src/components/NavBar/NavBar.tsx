import { FaCheckCircle, FaChevronRight } from "react-icons/fa";

import { Box, Divider, Typography } from "@mui/material";

type NavBarItems = {
  title?: string;
  subtitle?: string;
  helper?: string;
};

export function NavBar() {
  const menuItems: NavBarItems[] = [
    {
      title: "Eventos",
      subtitle: "Participe de Eventos",
      helper: "Ultima vez: 10/10/2021",
    },
    {
      title: "EMS Saúde",
      subtitle: "Possui pacientes",
      helper: "36 utilizam atualmente",
    },
    {
      title: "MedEx",
      subtitle: "Possui cadastro",
      helper: "Último acesso: 10/10/2021",
    },
    { title: "Amostras", helper: "Último entrega: 10/10/2021" },
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
      {menuItems.map(({ title, subtitle, helper }) => (
        <Box key={title} flex="1">
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            height="100%"
            p={3}
            sx={{ cursor: "pointer" }}
          >
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
