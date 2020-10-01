'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ManagementContractsSchema extends Schema {
  up () {
    this.create('management_contracts', (table) => {
      table.string('document')
      table.text('url_document')
      table.integer('unit_id').unsigned().references('id').inTable('units')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('management_contracts')
  }
}

module.exports = ManagementContractsSchema
