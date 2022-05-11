import { faker } from "@faker-js/faker";
import { manyOf, primaryKey } from "@mswjs/data";

const physician = {
  id: primaryKey(faker.datatype.uuid),
  name: faker.name.findName,
  crm: () => faker.helpers.regexpStyleStringParse("00000000-0/BR"),
  email: faker.internet.email,
  cellphone: faker.phone.phoneNumber,
  birthday: faker.datatype.uuid,
  age: () => faker.datatype.number({ min: 18, max: 100 }),
  specialty: faker.lorem.word,
  patients: () => faker.datatype.number({ max: 1000 }),
  anvisaLetter: faker.datatype.boolean,
  //
  hasMedEx: faker.datatype.boolean,
  hasEvents: faker.datatype.boolean,
  hasEmsHealth: faker.datatype.boolean,
  //
  events: manyOf("event"),
  emsHealth: manyOf("emsHealth"),
  medEx: manyOf("medEx"),
  samples: manyOf("sample"),
  medications: manyOf("medication"),
  clinics: manyOf("clinic"),
  opv: manyOf("opv"),
  annotations: manyOf("annotation"),
};

export { physician };
