'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddAttributesInUserSchema extends Schema {
  up () {
    this.table('users', (table) => {
      // alter table
      table.string('cpf', 14).notNullable().unique()
      table.string('role', 2)
      table.string('job', 50)
      table.string('cellphone', 20)
      table.integer('unit_id').unsigned().references('id').inTable('units')

    })
  }

  down () {
    this.table('add_attributes_in_users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AddAttributesInUserSchema
