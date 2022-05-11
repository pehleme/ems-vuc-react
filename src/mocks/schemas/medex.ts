import { faker } from "@faker-js/faker";
import { primaryKey } from "@mswjs/data";

const medEx = {
  id: primaryKey(faker.datatype.uuid),
  date: faker.date.month,
  access: () => faker.datatype.number({ min: 0, max: 5 }),
};

export { medEx };
