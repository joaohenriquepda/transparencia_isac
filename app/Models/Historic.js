'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Historic extends Model {


    registerAction() {
        return console.log("_+_+_+_+_+_+_+_+_+_");
    }
}

module.exports = Historic
