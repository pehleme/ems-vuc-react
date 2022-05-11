import { faker } from "@faker-js/faker";
import { primaryKey } from "@mswjs/data";

const secretary = {
  id: primaryKey(faker.datatype.uuid),
  name: faker.name.findName,
  cellphone: faker.phone.phoneNumber,
  email: faker.internet.email,
  birthday: faker.datatype.uuid,
  age: () => faker.datatype.number({ min: 18, max: 100 }),
};

export { secretary };
