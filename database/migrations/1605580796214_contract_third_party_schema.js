'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContractThirdPartySchema extends Schema {
  up () {
    this.create('contract_third_parties', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.string('year')
      table.string('type')
      table.string('document')
      table.text('url_document')
      table.integer('unit_id').unsigned().references('id').inTable('units')
    })
  }

  down () {
    this.drop('contract_third_parties')
  }
}

module.exports = ContractThirdPartySchema
