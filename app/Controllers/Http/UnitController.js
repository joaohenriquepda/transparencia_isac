'use strict'

// const  = use('App/Models/')

const Unit = use('App/Models/Unit')
const Logger = use('Logger')
const LogAction = use('App/Models/LogAction')
const Historic = use('App/Models/Historic')
const Contact = use('App/Models/Contact')
const PublicCall = use('App/Models/PublicCall')
const SelectionApproval = use('App/Models/SelectionApproval')
const ManagementContract = use('App/Models/ManagementContract')
const SelectiveProccess = use('App/Models/SelectiveProccess')
const ContractThirdParty = use('App/Models/ContractThirdParty')
const People = use('App/Models/Person')
const Politic = use('App/Models/Politic')
const Server = use('App/Models/Server')
const MatMed = use('App/Models/MatMed')
const Accountability = use('App/Models/Accountability')
const AccountingDoc = use('App/Models/AccountingDoc')






class UnitController {

  async index({ request, response, view }) {

    Logger.info("Show All units");
    try {
      return await Unit.all();
      // LogAction.create({ description: "", location: "", user_id: "", ip: ""})

    } catch (error) {
      Logger.error(error)
      return response.status(error.status).json({
        error: {
          message: "Error when Show All Units",
          error: error.message
        }
      })
    }
  }

  async create({ request, response, auth }) {

    Logger.info("Create new Unit");
    try {
      await auth.check();
      await LogAction.create({
        description: `Solicitou Criação de unidade`,
        location: "",
        ip: "192.0.0.1",
        user_id: auth.id
      })

      const data = request.all();

      const last = await Unit.query().last()
      data.id = last.id + 1

      // Status 0 needs approval
      // Status 1 for active
      // Status 2 for inactive
      data.status = 0;

      const unit = await Unit.create(data);

      await LogAction.create({
        description: `Criou a ${unit.name} com sucesso`,
        location: "",
        ip: "192.0.0.1",
        user_id: auth.id
      })

      await Historic.create({
        description: `A unidade ${unit.name} foi criada com sucesso`,
        location: "",
        ip: "192.0.0.1",
        unit_id: unit.id,
        user_id: auth.id
      })

      return unit


    } catch (error) {
      Logger.error(error)
      return response.status(error.status).json({
        error: {
          message: "Error when Create Unit",
          error: error.message
        }
      })
    }
  }

  async update({ request, response, params, auth }) {

    Logger.info("Update Unit");
    try {

      await auth.check();
      const data = request.all();

      LogAction.create({
        description: `Solicitou Update de unidade`,
        location: "",
        ip: "192.0.0.1",
        user_id: auth.id
      })

      const unit = await Unit.find(params.id);

      await unit.merge(data);
      await unit.save();

      LogAction.create({
        description: `Realizou atualização na unidade ${unit.name}`,
        location: "",
        ip: "192.0.0.1",
        user_id: auth.id
      })

      await Historic.create({
        description: `A unidade ${unit.name} teve informação atualizada`,
        location: "",
        ip: "192.0.0.1",
        unit_id: unit.id,
        user_id: auth.id
      })

      return unit

    } catch (error) {
      Logger.error(error)

      LogAction.create({
        description: `O Sistema encontrou um error ${error.message}`,
        location: "",
        ip: "192.0.0.1"
      })

      return response.status(error.status).json({
        error: {
          message: "Error when UPDATE Unit",
          error: error.message
        }
      })
    }
  }

  async show({ params, request, response, view }) {
    Logger.info("Show Specific unit");
    try {
      // const data = request.all();
      const unit = await Unit.find(params.id);
      unit.adm_structure = await unit.adm_structure().fetch();
      unit.contacts = await unit.contacts().fetch();
      unit.public_call = await unit.public_call().fetch();
      unit.selection_approval = await unit.selection_approval().fetch()
      unit.management_contracts = await unit.management_contracts().fetch()
      unit.selective_proccess = await unit.selective_proccess().fetch()
      unit.people = await unit.people().fetch();
      unit.servers = await unit.servers().fetch();
      unit.mat_med = await unit.mat_med().fetch();
      unit.accountability = await unit.accountability().fetch();
      unit.accounting_docs = await unit.accounting_docs().fetch();
      unit.politics = await unit.politics().fetch();
      unit.contractThirdParties = await unit.contractThirdParties.fetch();
      unit.historic = await unit.historic.fetch();

      return unit

    } catch (error) {
      Logger.error(error)
      return response.status(error.status).json({
        error: {
          message: "Error when Create Unit",
          error: error.message
        }
      })
    }
  }

  async addAdmStructure({ params, request, response, auth }) {
    Logger.info("Add Administrative Struture");
    try {
      auth.check();
      const data = request.all();
      const unit = await Unit.find(params.id);

      const last = await AdmStructure.query().last()
      if (last === null) {
        data.id = 1;
      } else {
        data.id = last.id + 1
      }

      unit.adm_structure().create(data);

      await LogAction.create({
        description: `Criou a Estrutura administrativa para ${unit.name} com sucesso`,
        location: "",
        ip: "192.0.0.1",
        user_id: auth.id
      })

      return unit;


    } catch (error) {
      Logger.error(error)
      return response.status(error.status).json({
        error: {
          message: "Error when Create Unit",
          error: error.message
        }
      })
    }

  }

  async addContacts({ params, request, response, auth }) {
    Logger.info("Add Contacts");
    try {
      await auth.check();
      const data = request.all();

      const unit = await Unit.find(params.id);

      const last = await Contact.query().last()
      if (last === null) {
        data.id = 1;
      } else {
        data.id = last.id + 1
      }

      await unit.contacts().create(data);

      await LogAction.create({
        description: `Criou um contato para ${unit.name} com sucesso`,
        location: "",
        ip: "192.0.0.1",
        user_id: auth.id
      })

      return unit;

    } catch (error) {
      Logger.error(error)
      return response.status(error.status).json({
        error: {
          message: "Error when Create Contact",
          error: error.message
        }
      })
    }

  }


  async addPublicCall({ params, request, response, view }) {
    Logger.info("Add Public Call");
    try {
      const data = request.all();

      const unit = await Unit.find(params.id);

      const last = await PublicCall.query().last()
      if (last === null) {
        data.id = 1;
      } else {
        data.id = last.id + 1
      }

      unit.public_call().create(data);
      return unit;

    } catch (error) {
      Logger.error(error)
      return response.status(error.status).json({
        error: {
          message: "Error when Create Public Call",
          error: error.message
        }
      })
    }

  }

  async addSelectionApproval({ params, request, response, view }) {
    Logger.info("Add SelectionApproval");
    try {
      const data = request.all();

      const unit = await Unit.find(params.id);

      const last = await SelectionApproval.query().last()
      if (last === null) {
        data.id = 1;
      } else {
        data.id = last.id + 1
      }
      unit.selection_approval().create(data);

      await LogAction.create({
        description: `Criou um Contrato de Gerenciamento para ${unit.name} com sucesso`,
        location: "",
        ip: "192.0.0.1",
        user_id: auth.id
      })
      return unit;

    } catch (error) {
      Logger.error(error)
      return response.status(error.status).json({
        error: {
          message: "Error when Create Selection Approval",
          error: error.message
        }
      })
    }
  }


  async addManagementContracts({ params, request, response, auth }) {
    Logger.info("Add Management Contracts");
    try {

      auth.check();

      const data = request.all();

      const unit = await Unit.find(params.id);

      const last = await ManagementContract.query().last()
      if (last === null) {
        data.id = 1;
      } else {
        data.id = last.id + 1
      }

      unit.management_contracts().create(data);

      await LogAction.create({
        description: `Criou um Contrato de Gerenciamento para ${unit.name} com sucesso`,
        location: "",
        ip: "192.0.0.1",
        user_id: auth.id
      })

      return unit;

    } catch (error) {
      Logger.error(error)
      return response.status(error.status).json({
        error: {
          message: "Error when Create Management Contracts",
          error: error.message
        }
      })
    }
  }


  async addSelectiveProccess({ params, request, response, view }) {
    Logger.info("Add Selective Proccess");
    try {
      const data = request.all();

      const unit = await Unit.find(params.id);

      const last = await SelectiveProccess.query().last()
      if (last === null) {
        data.id = 1;
      } else {
        data.id = last.id + 1
      }

      unit.selective_proccess().create(data);
      return unit;

    } catch (error) {
      Logger.error(error)
      return response.status(error.status).json({
        error: {
          message: "Error when Create Selective Proccess",
          error: error.message
        }
      })
    }
  }

  async addContractThirdParty({ params, request, response, auth }) {
    Logger.info("Add Contact Third Party");
    try {

      auth.check();
      const data = request.all();

      const unit = await Unit.find(params.id);

      const last = await ContractThirdParty.query().last()
      if (last === null) {
        data.id = 1;
      } else {
        data.id = last.id + 1
      }

      await unit.contractThirdParties().create(data);

      await LogAction.create({
        description: `Criou um Contrato com terceiros para ${unit.name} com sucesso`,
        location: "",
        ip: "192.0.0.1",
        user_id: auth.id
      })

      return unit;

    } catch (error) {
      Logger.error(error)
      return response.status(error.status).json({
        error: {
          message: "Error when Create People",
          error: error.message
        }
      })
    }
  }



  async addPeople({ params, request, response, view }) {
    Logger.info("Add People");
    try {
      const data = request.all();

      const unit = await Unit.find(params.id);

      const last = await People.query().last()
      if (last === null) {
        data.id = 1;
      } else {
        data.id = last.id + 1
      }

      unit.people().create(data);
      return unit;

    } catch (error) {
      Logger.error(error)
      return response.status(error.status).json({
        error: {
          message: "Error when Create People",
          error: error.message
        }
      })
    }
  }


  async addPolitics({ params, request, response }) {
    Logger.info("Add Politic");
    try {
      const data = request.all();

      const unit = await Unit.find(params.id);

      const last = await Politic.query().last()
      if (last === null) {
        data.id = 1;
      } else {
        data.id = last.id + 1
      }

      unit.politics().create(data);
      return unit;

    } catch (error) {
      Logger.error(error)
      return response.status(error.status).json({
        error: {
          message: "Error when Create politics",
          error: error.message
        }
      })
    }
  }

  async addServer({ params, request, response, view }) {
    Logger.info("Add People");
    try {
      const data = request.all();

      const unit = await Unit.find(params.id);

      const last = await Server.query().last()
      if (last === null) {
        data.id = 1;
      } else {
        data.id = last.id + 1
      }

      unit.server().create(data);
      return unit;

    } catch (error) {
      Logger.error(error)
      return response.status(error.status).json({
        error: {
          message: "Error when Create Selection Approval",
          error: error.message
        }
      })
    }
  }

  async addMatMed({ params, request, response, view }) {
    Logger.info("Add People");
    try {
      const data = request.all();

      const unit = await Unit.find(params.id);

      const last = await MatMed.query().last()
      if (last === null) {
        data.id = 1;
      } else {
        data.id = last.id + 1
      }

      unit.mat_med().create(data);
      return unit;

    } catch (error) {
      Logger.error(error)
      return response.status(error.status).json({
        error: {
          message: "Error when Create Selection Approval",
          error: error.message
        }
      })
    }
  }


  async addAccountability({ params, request, response, view }) {
    Logger.info("Add People");
    try {
      const data = request.all();

      const unit = await Unit.find(params.id);

      const last = await Accountability.query().last()
      if (last === null) {
        data.id = 1;
      } else {
        data.id = last.id + 1
      }

      unit.accountability().create(data);
      return unit;

    } catch (error) {
      Logger.error(error)
      return response.status(error.status).json({
        error: {
          message: "Error when Create Selection Approval",
          error: error.message
        }
      })
    }
  }

  async addAccountingDoc({ params, request, response, view }) {
    Logger.info("Add People");
    try {
      const data = request.all();

      const unit = await Unit.find(params.id);

      const last = await AccountingDoc.query().last()
      if (last === null) {
        data.id = 1;
      } else {
        data.id = last.id + 1
      }

      unit.accounting_docs().create(data);
      return unit;

    } catch (error) {
      Logger.error(error)
      return response.status(error.status).json({
        error: {
          message: "Error when Create Selection Approval",
          error: error.message
        }
      })
    }
  }

  async delete({ params, request, response }) {

    Logger.info("Destroy Unit");
    try {

      const unit = await Unit.find(params.id);
      // Status 0 needs approval
      // Status 1 for active
      // Status 2 for inactive

      unit.merge({ status: 2 })
      unit.save();

      // await unit.adm_structure().delete();
      // await unit.contacts().delete();
      // await unit.public_call().delete();
      // await unit.selection_approval().delete();
      // await unit.selection_approval().delete();
      // await unit.management_contracts().delete();
      // await unit.selective_proccess().delete();
      // await unit.people().delete();
      // await unit.servers().delete();
      // await unit.mat_med().delete();
      // await unit.accountability().delete();
      // await unit.accounting_docs().delete();

      // await unit.delete();

      return response.status(200).json({
        message: "Success",
      })

    } catch (error) {
      Logger.error(error)
      return response.status(error.status).json({
        error: {
          message: "Error Destroy Unit",
          error: error.message
        }
      })
    }
  }
}


module.exports = UnitController
