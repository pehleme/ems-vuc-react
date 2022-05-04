import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { IconLoading } from "~/assets/icons";
import { ImgLoading } from "~/assets/images";

import { Box, keyframes, Typography } from "@mui/material";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  }, [navigate]);

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        background:
          "transparent linear-gradient(180deg, #F8F9FB 70%, #CFDFE7 100%) 0% 0% no-repeat padding-box;",
      }}
    >
      <img src={ImgLoading} height="30%" />

      <Box
        component="img"
        my={5}
        sx={{
          width: 30,
          height: 30,
          animation: `${spin} 1s infinite ease`,
        }}
        src={IconLoading}
        height="30%"
      />
      <Box>
        <Typography color="primary.dark" fontSize="22px" fontWeight="700">
          Importando as fichas dos seus médicos
        </Typography>
        <Typography color="#6B6B6D" fontSize="18px">
          Isso pode levar alguns instantes...
        </Typography>
      </Box>
    </Box>
  );
}

export default LoadingPage;
