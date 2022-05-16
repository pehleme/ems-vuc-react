import { ChangeEvent, Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IconSelecao } from "~/assets/icons";
import { ImgLogoEmsVucWhite } from "~/assets/images";
import { Header } from "~/components";

import {
  Box,
  Button,
  Container,
  Divider,
  MenuItem,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";

interface ScreeningForm {
  line?: string;
  sector?: string;
  district?: string;
}

interface StepItem {
  label: string;
  description: string;
  options: string[];
  field: Extract<keyof ScreeningForm, string>;
}

const steps: StepItem[] = [
  {
    label: "Linha",
    description: "Selecione a sua linha",
    options: ["Linha 1", "Linha 2", "Linha 3"],
    field: "line",
  },
  {
    label: "Distrito",
    description: "Selecione o seu distrito",
    options: ["Distrito 1", "Distrito 2", "Distrito 3"],
    field: "sector",
  },
  {
    label: "Setor",
    description: "Selecione o seu setor",
    options: ["Setor 1", "Setor 2", "Setor 3"],
    field: "district",
  },
];

function ScreeningPage() {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState<ScreeningForm>({
    line: "",
    sector: "",
    district: "",
  });

  const { description, options, field } = steps[activeStep];

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      navigate("/list", { state: form });
      return;
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [field]: event.target.value });
  };

  return (
    <Fragment>
      <Header>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <Box component="img" src={ImgLogoEmsVucWhite} height="32px" />
        </Box>
      </Header>
      <Box display="flex" bgcolor="#F8F9FB" height="100%" p={5}>
        <Container maxWidth="md" sx={{ m: "auto" }}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Box component="img" src={IconSelecao} height="30%" />
            <Typography ml={5}>
              Consulte as informações <br />
              de todos os seus médicos <br />
              de qualquer lugar
            </Typography>
          </Box>
          <Divider sx={{ my: 5 }} />
          <Stepper activeStep={activeStep} nonLinear alternativeLabel>
            {steps.map(({ label }, index) => (
              <Step key={label}>
                <StepLabel>{activeStep === index ? label : ""}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Container maxWidth="sm" sx={{ my: 5 }}>
            <Typography
              fontSize="22px"
              fontWeight="bold"
              textAlign="center"
              sx={{ mb: 3 }}
            >
              {activeStep + 1}. {description}
            </Typography>
            <TextField
              select
              value={form[field]}
              onChange={handleSelectChange}
              defaultValue=""
              size="small"
              fullWidth
            >
              <MenuItem value={""} disabled>
                Selecione uma opção
              </MenuItem>
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Container>
          <Divider sx={{ my: 5 }} />
          <Box display="flex">
            <Button
              onClick={handleBack}
              disabled={activeStep <= 0}
              variant="outlined"
              fullWidth
              sx={{ mr: 2 }}
            >
              Voltar
            </Button>
            <Button
              onClick={handleNext}
              disabled={activeStep == steps.length || !form[field]}
              variant="contained"
              fullWidth
              sx={{ ml: 2 }}
            >
              Continuar
            </Button>
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
}

export default ScreeningPage;
