'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Unit extends Model {
    adm_structure() {
        return this.hasMany('App/Models/AdmStructure')
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

    politics(){
        return this.hasMany('App/Models/Politic')
    }

    contractThirdParties(){
        return this.hasMany('App/Models/ContractThirdParty')
    }


}

module.exports = Unit
