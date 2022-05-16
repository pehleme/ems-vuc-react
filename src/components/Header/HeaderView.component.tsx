import { PropsWithChildren } from "react";
import { FaArrowLeft } from "react-icons/fa";

import { Box, Grid, IconButton, Typography } from "@mui/material";

import { HeaderProps } from "./Header.types";

function HeaderView({
  children,
  backText,
  onClickBack,
}: PropsWithChildren<HeaderProps>) {
  const hasBackButton = !!onClickBack || !!backText;

  return (
    <header>
      <Grid container height="70px" color="white">
        {hasBackButton && (
          <Grid item xs={3} px={2} bgcolor="primary.dark">
            <Box
              onClick={onClickBack}
              display="flex"
              alignItems="center"
              height="100%"
              sx={{ cursor: "pointer" }}
            >
              <IconButton>
                <FaArrowLeft color="white" fontSize="20px" />
              </IconButton>
              <Typography>{backText}</Typography>
            </Box>
          </Grid>
        )}
        <Grid item xs={hasBackButton ? 9 : 12} px={2} bgcolor="primary.main">
          {children}
        </Grid>
      </Grid>
    </header>
  );
}

export { HeaderView };
