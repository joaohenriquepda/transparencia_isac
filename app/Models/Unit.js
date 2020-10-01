'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Unit extends Model {
    adm_struture() {
        return this.hasMany('App/Models/AdmStruture')
    }

    contacts() {
        return this.hasMany('App/Models/Contact')
    }

    public_call() {
        return this.hasMany('App/Models/PublicCall')
    }

    selection_approval(){
        return this.hasMany('App/Models/SelectionApproval')
    }
    management_contracts(){
        return this.hasMany('App/Models/ManagementContract')
    }

    selective_proccess(){
        return this.hasMany('App/Models/SelectiveProccess')
    }

    people(){
        return this.hasMany('App/Models/Person')
    }

    servers(){
        return this.hasMany('App/Models/Server')
    }

    mat_med(){
        return this.hasMany('App/Models/MatMed')
    }

    accountability(){
        return this.hasMany('App/Models/Accountability')
    }

    accounting_docs(){
        return this.hasMany('App/Models/AccountingDoc')
    }


}

module.exports = Unit
