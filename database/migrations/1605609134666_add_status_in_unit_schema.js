'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddStatusInUnitSchema extends Schema {
  up () {
    this.table('units', (table) => {
            // alter table
      // Status 0 needs approval
      // Status 1 for active
      // Status 2 for inactive
      table.integer('status')
    })
  }

  down () {
    this.table('units', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddStatusInUnitSchema
