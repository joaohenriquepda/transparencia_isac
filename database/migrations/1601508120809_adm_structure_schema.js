'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdmStructureSchema extends Schema {
  up () {
    this.create('adm_structures', (table) => {
      table.string('office')
      table.string('name')
      table.string('email')
      table.text('resume')
      table.integer('unit_id').unsigned().references('id').inTable('units')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('adm_strutures')
  }
}

module.exports = AdmStructureSchema
