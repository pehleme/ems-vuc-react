/* eslint-disable import/no-extraneous-dependencies */
import { faker } from "@faker-js/faker";
import { primaryKey } from "@mswjs/data";

const medicalCare = {
  id: primaryKey(faker.datatype.uuid),
  name: faker.name.findName,
  cellphone: faker.phone.phoneNumber,
  address: faker.address.streetAddress,
  active: faker.datatype.boolean,
};

export { medicalCare };
