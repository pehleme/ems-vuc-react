import { PhysicianModel } from "~/data/models";
import { RxCollection, RxJsonSchema } from "rxdb";

export type PhysicianCollection = RxCollection<PhysicianModel>;

const physicianSchema: RxJsonSchema<PhysicianModel> = {
  title: "physician schema",
  primaryKey: "id",
  type: "object",
  version: 0,
  properties: {
    id: {
      type: "string",
    },
    name: { type: "string" },
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

    events: {
      type: "array",
      ref: "event",
      items: {
        type: "object",
      },
    },
    emsHealth: {
      type: "array",
      ref: "emsHealth",
      items: {
        type: "object",
      },
    },
    medEx: {
      type: "array",
      ref: "medEx",
      items: {
        type: "object",
      },
    },
    samples: {
      type: "array",
      ref: "sample",
      items: {
        type: "object",
      },
    },
    medications: {
      type: "array",
      ref: "medication",
      items: {
        type: "object",
      },
    },
    clinics: {
      type: "array",
      ref: "clinic",
      items: {
        type: "object",
      },
    },
    opv: {
      type: "array",
      ref: "opv",
      items: {
        type: "object",
      },
    },
    annotations: {
      type: "array",
      ref: "annotation",
      items: {
        type: "object",
      },
    },
  },
  required: ["id"],
};

export { physicianSchema };
