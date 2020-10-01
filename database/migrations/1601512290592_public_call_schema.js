'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PublicCallSchema extends Schema {
  up () {
    this.create('public_calls', (table) => {

      table.string('document')
      table.text('url_document')
      table.integer('unit_id').unsigned().references('id').inTable('units')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('public_calls')
  }
}

module.exports = PublicCallSchema
