import { EventCollection, PhysicianCollection } from "./schemas";

export type DbCollections = {
  physician: PhysicianCollection;
  event: EventCollection;
};
