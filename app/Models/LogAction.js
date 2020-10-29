'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class LogAction extends Model {

    user() {
        return this.belongsTo('App/Models/User')
    }


    registerAction() {
        return console.log("_+_+_+_+_+_+_+_+_+_");

    }

}

module.exports = LogAction
