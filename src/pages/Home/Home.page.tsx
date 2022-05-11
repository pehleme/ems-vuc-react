import { IconAnotacoes, IconAtendimento, IconOPV } from "~/assets/icons";
import {
  AttendancesDialog,
  EventCard,
  MedicationCard,
  NotesDialog,
  OpvDialog,
} from "~/components";

import { Box, Grid } from "@mui/material";

const prescriptions = [
  {
    name: "Nimensulida",
    cat: "CAT 1",
    comment: "Eu recomendo",
    percentage: 80,
  },
  {
    name: "Gelmax",
    cat: "CAT 3",
    comment: "Eu uso",
    percentage: 50,
  },
  {
    name: "Esomex",
    cat: "CAT 1",
    comment: "Eu recomendo",
    percentage: 90,
  },
];

function HomePage() {
  return (
    <Box p={3} bgcolor="#F8F9FB" height="100%">
      <Grid container>
        <Grid item xs={12} container spacing={2}>
          {prescriptions.map(({ name, cat, comment, percentage }) => (
            <Grid key={name} item xs={4}>
              <MedicationCard
                name={name}
                cat={cat}
                comment={comment}
                percentage={percentage}
              />
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} container spacing={2}>
          <Grid item xs={4}>
            <EventCard
              title="Atendimentos"
              dialog={AttendancesDialog}
              icon={IconAtendimento}
            >
              <strong>
                Hoje: OrtoSP <br />
                das 8h até 11h30
              </strong>
              <br />
              Rua Cincinato Braga, 340 Bela Vista, São Paulo - SP
            </EventCard>
          </Grid>
          <Grid item xs={4}>
            <EventCard title="OPV" dialog={OpvDialog} icon={IconOPV}>
              Reforçar medicamento GELMAX, comentar sobre EMS Saúde e perguntar
              se já começou tratamento...
            </EventCard>
          </Grid>
          <Grid item xs={4}>
            <EventCard
              title="Anotações"
              dialog={NotesDialog}
              icon={IconAnotacoes}
            >
              4 anotações minhas, <br /> 2 anotações de colegas
            </EventCard>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;
