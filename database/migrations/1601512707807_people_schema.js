'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PeopleSchema extends Schema {
  up () {
    this.create('people', (table) => {
      table.string('update_date')
      table.string('document')
      table.text('url_document')
      table.integer('unit_id').unsigned().references('id').inTable('units')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('people')
  }
}

module.exports = PeopleSchema
