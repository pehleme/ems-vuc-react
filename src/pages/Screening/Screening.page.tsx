import { LANGUAGE } from "~/utils/constants";

import { Box, Step, StepLabel, Stepper } from "@mui/material";
const steps = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad",
];

function ScreeningPage() {
  console.log(LANGUAGE);

  return (
    <Box>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default ScreeningPage;
