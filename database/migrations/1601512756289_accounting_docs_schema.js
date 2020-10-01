'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AccountingDocsSchema extends Schema {
  up () {
    this.create('accounting_docs', (table) => {
      table.string('update_date')
      table.string('document')
      table.text('url_document')
      table.integer('unit_id').unsigned().references('id').inTable('units')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('accounting_docs')
  }
}

module.exports = AccountingDocsSchema
