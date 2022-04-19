import { FaCheckCircle, FaChevronRight } from "react-icons/fa";

import { Box } from "@mui/material";

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
    <Box className="flex flex-col justify-around h-full divide-y-2">
      {menuItems.map(({ title, subtitle, helper }) => (
        <Box
          key={title}
          className="flex flex-row justify-between items-center h-full divide-gray-300 cursor-pointer"
        >
          <Box className="flex flex-col space-y-1">
            <Box className="text-lg font-bold">{title}</Box>
            {subtitle && (
              <Box className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-500" />
                <Box className="font-bold">{subtitle}</Box>
              </Box>
            )}
            <Box className="text-sm font-light">{helper}</Box>
          </Box>
          <FaChevronRight className="text-2xl " />
        </Box>
      ))}
    </Box>
  );
}
