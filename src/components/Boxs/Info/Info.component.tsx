import { PropsWithChildren } from "react";

import { Box, Typography } from "@mui/material";

import { InfoBoxProps } from "./Info.types";

function InfoBox({
  label,
  vertical: horizontal,
  children,
}: PropsWithChildren<InfoBoxProps>) {
  return (
    <Box display="flex" flexDirection={horizontal ? "column" : "row"}>
      <Typography fontSize="14px">{label}:&nbsp;</Typography>
      <Box fontSize="14px" fontWeight="700">
        {children}
      </Box>
    </Box>
  );
}

export { InfoBox };
