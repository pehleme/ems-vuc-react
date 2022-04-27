import { PropsWithChildren } from "react";

import { Box, BoxProps, Button, Typography } from "@mui/material";

type EventCardProps = BoxProps & {
  title?: string;
  icon?: string;
};

function EventCard({
  title,
  children,
  icon,
}: PropsWithChildren<EventCardProps>) {
  return (
    <Box
      className="flex flex-col justify-between p-5 space-y-5 h-full"
      sx={{ minWidth: 230, minHeight: 230 }}
    >
      <Box className="flex justify-between items-center">
        <Typography fontSize="1.125rem" fontWeight={700}>
          {title}
        </Typography>
        <img src={icon} alt={title} />
      </Box>
      <Box>{children}</Box>
      <Box className="flex justify-center">
        <Button variant="contained" fullWidth>
          ver mais
        </Button>
      </Box>
    </Box>
  );
}

export { EventCard };
