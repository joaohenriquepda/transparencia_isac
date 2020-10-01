'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SelectionApprovalSchema extends Schema {
  up () {
    this.create('selection_approvals', (table) => {
      table.string('document')
      table.text('url_document')
      table.integer('unit_id').unsigned().references('id').inTable('units')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('selection_approvals')
  }
}

module.exports = SelectionApprovalSchema
