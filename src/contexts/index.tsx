import { ReactNode } from "react";

import { Box } from "@mui/material";

type GlobalProviderProps = {
  children?: ReactNode;
};

function GlobalProvider({ children }: GlobalProviderProps) {
  return <Box className="h-full">{children}</Box>;
}

export { GlobalProvider };
