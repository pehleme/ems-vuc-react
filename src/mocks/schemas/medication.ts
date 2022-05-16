/* eslint-disable import/no-extraneous-dependencies */
import { faker } from "@faker-js/faker";
import { primaryKey } from "@mswjs/data";

const medication = {
  id: primaryKey(faker.datatype.uuid),
  day: () => faker.datatype.number({ min: 0, max: 5 }),
  startTime: () => faker.datatype.number({ min: 0, max: 12 }),
  endTime: () => faker.datatype.number({ min: 13, max: 24 }),
};

export { medication };
