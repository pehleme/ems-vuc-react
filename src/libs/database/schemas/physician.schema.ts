import { PhysicianModel } from "~/data/models";
import { RxCollection, RxJsonSchema } from "rxdb";

export type PhysicianCollection = RxCollection<PhysicianModel>;

const physician: RxJsonSchema<PhysicianModel> = {
  title: "physician schema",
  primaryKey: "id",
  type: "object",
  version: 0,
  properties: {
    id: {
      type: "string",
    },
    name: { type: "number" },
    crm: { type: "string" },
    email: { type: "string" },
    cellphone: { type: "string" },
    birthday: { type: "string" },
    age: { type: "number" },
    specialty: { type: "string" },
    patients: { type: "number" },
    anvisaLetter: { type: "boolean" },

    profilePdi: { type: "boolean" },
    profileVac: { type: "boolean" },
    profileType: { type: "boolean" },

    hasMedEx: { type: "boolean" },
    hasEvents: { type: "boolean" },
    hasEmsHealth: { type: "boolean" },

    events: { type: "array", ref: "event" },
    emsHealth: { type: "array" },
    medEx: { type: "array" },
    samples: { type: "array" },
    medications: { type: "array" },
    clinics: { type: "array" },
    opv: { type: "array" },
    annotations: { type: "array" },
  },
  required: ["id"],
};

export { physician };
