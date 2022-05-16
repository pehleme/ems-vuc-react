import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ImgLogoEmsShadow, ImgLogoVuc } from "~/assets/images";

import { Box, Slide } from "@mui/material";

function SplashPage() {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
    setTimeout(() => {
      navigate("/screening");
    }, 2000);
  }, [navigate]);

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      bgcolor="primary.main"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box display="flex" alignItems="center">
        <Box component="img" src={ImgLogoEmsShadow} zIndex={10} />
        <Slide direction="right" in={show} mountOnEnter unmountOnExit>
          <Box component="img" src={ImgLogoVuc} ml="-50px" zIndex={0} />
        </Slide>
      </Box>
    </Box>
  );
}

export default SplashPage;
