/* eslint-disable import/no-extraneous-dependencies */
import { faker } from "@faker-js/faker";
import { primaryKey } from "@mswjs/data";

const opv = {
  id: primaryKey(faker.datatype.uuid),
  name: faker.name.findName,
  date: faker.date.recent,
  description: faker.lorem.lines,
};

export { opv };
