import { faker } from "@faker-js/faker";
import { primaryKey } from "@mswjs/data";

const sample = {
  id: primaryKey(faker.datatype.uuid),
  name: faker.name.findName,
  date: faker.date.recent,
  quantity: () => faker.datatype.number({ min: 0, max: 5 }),
  propagandist: faker.name.findName,
};

export { sample };
