import { ReactNode } from "react";

import { Box } from "@mui/material";

interface GlobalProviderProps {
  children: ReactNode;
}

function GlobalProvider({ children }: GlobalProviderProps) {
  return <Box>{children}</Box>;
}

export { GlobalProvider };
