import { faker } from "@faker-js/faker";
import { primaryKey } from "@mswjs/data";

const event = {
  id: primaryKey(faker.datatype.uuid),
  name: faker.name.findName,
  date: faker.date.recent,
  type: () => faker.lorem.words(2),
  permanence: () => "1 h",
};

export { event };
