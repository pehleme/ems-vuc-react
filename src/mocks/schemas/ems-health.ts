/* eslint-disable import/no-extraneous-dependencies */
import { faker } from "@faker-js/faker";
import { primaryKey } from "@mswjs/data";

const emsHealth = {
  id: primaryKey(faker.datatype.uuid),
  name: faker.name.findName,
  patients: () => faker.datatype.number({ min: 0, max: 1000 }),
};

export { emsHealth };
