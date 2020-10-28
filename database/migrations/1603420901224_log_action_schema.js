'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LogActionSchema extends Schema {
  up () {
    this.create('log_actions', (table) => {
      table.increments()
      table.text('description')
      table.string('location')
      table.text('ip')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('log_actions')
  }
}

module.exports = LogActionSchema
