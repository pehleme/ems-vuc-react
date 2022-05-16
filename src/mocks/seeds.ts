import { db } from "./database";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createList = (quantity: number, action: any) =>
  [...Array(quantity).keys()].map(() => action);

const seeds = () => {
  [...Array(100).keys()].map(() =>
    db.physician.create({
      events: createList(10, db.event.create()),
      emsHealth: createList(6, db.emsHealth.create()),
      medEx: createList(6, db.medEx.create()),
      samples: createList(8, db.sample.create()),
      medications: createList(3, db.medication.create()),
      clinics: createList(
        3,
        db.clinic.create({
          medicalCare: createList(3, db.medicalCare.create()),
          secretaries: createList(3, db.secretary.create()),
        }),
      ),
      opv: createList(3, db.opv.create()),
      annotations: createList(3, db.annotation.create()),
    }),
  );
};

export { seeds };
