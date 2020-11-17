'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HistoricSchema extends Schema {
  up() {
    this.create('historics', (table) => {
      table.increments()
      table.timestamps()
      table.text('description')
      table.string('location')
      table.text('ip')
      table.integer('unit_id').unsigned().references('id').inTable('units')
      table.integer('user_id').unsigned().references('id').inTable('users')
    })
  }

  down() {
    this.drop('historics')
  }
}

module.exports = HistoricSchema
