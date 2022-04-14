import { faker } from '@faker-js/faker'
import { Factory } from 'miragejs'

export const user = Factory.extend<{ id?: string, name?: string }>({
  id() { return faker.datatype.uuid() },
  name() { return faker.name.findName() },
  // cratedAt: faker.date.recent(),
  // updatedAt: faker.date.recent(),
  // username() { return faker.internet.userName() },
  // email() { return faker.internet.email() },
  // password() { return faker.internet.password() },
})
