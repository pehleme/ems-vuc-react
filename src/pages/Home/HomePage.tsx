import { IconAnotacoes, IconAtendimento, IconOPV } from "~/assets/icons";
import { EventCard, NavBar, PrescriptionCard } from "~/components";
import { PrescriptionModel } from "~/data/models";

import { Grid } from "@mui/material";

function HomePage() {
  const prescriptions: PrescriptionModel[] = [
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

  return (
    <Grid container sx={{ height: "calc(100% - 160px)" }}>
      <Grid item xs={3} className="p-5 bg-gray-100">
        <NavBar />
      </Grid>
      <Grid
        item
        xs={9}
        className="flex flex-col justify-around p-5 space-y-5 bg-gray-200"
      >
        <Grid container spacing={2}>
          {prescriptions.map(({ name, cat, comment, percentage }) => (
            <Grid item xs={4}>
              <PrescriptionCard
                name={name}
                cat={cat}
                comment={comment}
                percentage={percentage}
              />
            </Grid>
          ))}
        </Grid>
        <Grid container className="divide-x-2 divide-gray-300">
          <Grid item xs={4}>
            <EventCard title="Atendimentos" icon={IconAtendimento}>
              <strong>
                Hoje: OrtoSP <br />
                das 8h até 11h30
              </strong>
              <br />
              Rua Cincinato Braga, 340 Bela Vista, São Paulo - SP
            </EventCard>
          </Grid>
          <Grid item xs={4}>
            <EventCard title="OPV" icon={IconOPV}>
              Reforçar medicamento GELMAX, comentar sobre EMS Saúde e perguntar
              se já começou tratamento...
            </EventCard>
          </Grid>
          <Grid item xs={4}>
            <EventCard title="Anotações" icon={IconAnotacoes}>
              4 anotações minhas, <br /> 2 anotações de colegas
            </EventCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HomePage;
