import { faker } from "@faker-js/faker";
import { manyOf, primaryKey } from "@mswjs/data";

const clinic = {
  id: primaryKey(faker.datatype.uuid),
  name: faker.name.findName,
  cellphone: faker.phone.phoneNumber,
  address: faker.address.streetAddress,
  active: faker.datatype.boolean,

  secretaries: manyOf("secretary"),
  medicalCare: manyOf("medicalCare"),
};

export { clinic };
