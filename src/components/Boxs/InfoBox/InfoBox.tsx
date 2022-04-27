import { PropsWithChildren } from "react";

import { Box } from "@mui/material";

type InfoBoxProps = {
  label: string;
  orientation?: "horizontal" | "vertical";
};

function InfoBox({
  label,
  orientation = "horizontal",
  children,
}: PropsWithChildren<InfoBoxProps>) {
  const orientationClass = orientation === "horizontal" ? "flex" : "flex-row";

  return (
    <Box className={`${orientationClass} space-x-1`}>
      <Box>{label}:</Box>
      <Box className="flex space-x-1 font-bold">{children}</Box>
    </Box>
  );
}

export { InfoBox };
