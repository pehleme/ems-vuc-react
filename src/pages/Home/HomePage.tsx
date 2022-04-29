import { useTranslation } from "react-i18next";

import { Box } from "@mui/material";

function HomePage() {
  const { t } = useTranslation();

  return (
    <Box p={3} bgcolor="#F8F9FB" height="100%">
      {t("title")}
    </Box>
  );
}

export default HomePage;
