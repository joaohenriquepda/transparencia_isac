'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')


class UnitSchema extends Schema {
  up () {
    this.create('units', (table) => {

      table.string('cnpj')
      table.string('name')
      table.string('address')
      table.string('city')
      table.string('uf')
      table.string('cep')
      table.string('phone')
      table.text('url_logo')
      table.string('type')
      table.text('resume')
      table.text('organization_chart')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('units')
  }
}

module.exports = UnitSchema
