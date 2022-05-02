import { ElementType, PropsWithChildren, ReactNode } from "react";

import { Box, BoxProps, Typography } from "@mui/material";

type EventCardProps = BoxProps & {
  title?: string;
  icon?: string;
  dialog?: ElementType<ReactNode>;
};

function EventCard({
  title,
  children,
  icon,
  dialog,
}: PropsWithChildren<EventCardProps>) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="233px"
      p={3}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontSize="18px" fontWeight={700}>
          {title}
        </Typography>
        <img src={icon} alt={title} />
      </Box>
      <Box fontSize="14px">{children}</Box>
      <Box component={dialog} />
    </Box>
  );
}

export { EventCard };
