'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SelectiveProccessSchema extends Schema {
  up () {
    this.create('selective_proccesses', (table) => {
      table.string('update_date')
      table.string('document')
      table.text('url_document')
      table.integer('unit_id').unsigned().references('id').inTable('units')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('selective_proccesses')
  }
}

module.exports = SelectiveProccessSchema
