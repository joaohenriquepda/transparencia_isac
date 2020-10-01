'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AccountabilitySchema extends Schema {
  up () {
    this.create('accountabilities', (table) => {

      table.string('type')
      table.string('year')
      table.string('update_date')
      table.string('document')
      table.text('url_document')
      table.integer('unit_id').unsigned().references('id').inTable('units')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('accountabilities')
  }
}

module.exports = AccountabilitySchema
