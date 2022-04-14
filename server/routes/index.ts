import { Server } from 'miragejs/server'

export function routes(this: Server): void {
  this.namespace = 'api'

  this.get(`/users`, (schema) =>
    schema.db.users
  )

  this.namespace = ''
  this.passthrough()
}
