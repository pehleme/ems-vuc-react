import { EventModel } from "~/data/models";
import { RxCollection, RxJsonSchema } from "rxdb";

export type EventCollection = RxCollection<EventModel>;

const eventSchema: RxJsonSchema<EventModel> = {
  title: "event schema",
  primaryKey: "id",
  type: "object",
  version: 0,
  properties: {
    id: {
      type: "string",
    },
    name: { type: "string" },
    date: { type: ["Date", "string"] },
    type: { type: "number" },
    permanence: { type: "string" },
  },
  required: ["id"],
};

export { eventSchema };
