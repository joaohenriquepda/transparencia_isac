'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class LogAction extends Model {

    user() {
        return this.hasOne('App/Models/LogAction')
    }


    registerAction() {
        return console.log("_+_+_+_+_+_+_+_+_+_");
    }

}

module.exports = LogAction
