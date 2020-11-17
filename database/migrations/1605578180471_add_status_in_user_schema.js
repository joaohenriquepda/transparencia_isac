'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddStatusInUserSchema extends Schema {
  up () {
    this.table('users', (table) => {
      // alter table
      // Status 1 for active
      // Status 0 for inactive
      table.integer('status')
    })
  }

  down () {
    this.table('add_status_in_users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddStatusInUserSchema
