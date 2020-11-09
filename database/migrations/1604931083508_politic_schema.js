'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PoliticSchema extends Schema {
  up () {
    this.create('politics', (table) => {
      table.string('name')
      table.string('year')
      table.string('type')
      table.string('document')
      table.text('url_document')
      table.integer('unit_id').unsigned().references('id').inTable('units')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('politics')
  }
}

module.exports = PoliticSchema
