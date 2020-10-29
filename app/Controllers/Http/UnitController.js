'use strict'

const Logger = use('Logger')
const Unit = use('App/Models/Unit')
const LogAction = use('App/Models/LogAction')

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
      const data = request.all();
      const unit = await Unit.create(data);

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

  async update({ request, response, params }) {

    Logger.info("Update Unit");
    try {

      await auth.check();
      const data = request.all();
      const unit = await Unit.find(params.id);
      await unit.merge(data);
      await unit.save();

      return unit

    } catch (error) {
      Logger.error(error)
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
      unit.people = await unit.people().fetch()
      unit.servers = await unit.servers().fetch()
      unit.mat_med = await unit.mat_med().fetch()
      unit.accountability = await unit.accountability().fetch()
      unit.accounting_docs = await unit.accounting_docs().fetch()

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

  async addAdmStructure({ params, request, response, view }) {
    Logger.info("Add Administrative Struture");
    try {
      const data = request.all();

      const unit = await Unit.find(params.id);
      unit.adm_structure().create(data);

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

  async addContacts({ params, request, response, view }) {
    Logger.info("Add Contacts");
    try {
      const data = request.all();

      const unit = await Unit.find(params.id);
      unit.contacts().create(data);
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
      unit.selection_approval().create(data);
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


  async addManagementContracts({ params, request, response, view }) {
    Logger.info("Add Management Contracts");
    try {
      const data = request.all();

      const unit = await Unit.find(params.id);
      unit.management_contracts().create(data);
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

  async addPeople({ params, request, response, view }) {
    Logger.info("Add People");
    try {
      const data = request.all();

      const unit = await Unit.find(params.id);
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

  async addServer({ params, request, response, view }) {
    Logger.info("Add People");
    try {
      const data = request.all();

      const unit = await Unit.find(params.id);
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

  /**
   * Delete a unit with id.
   * DELETE units/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async delete({ params, request, response }) {

    Logger.info("Destroy Unit");
    try {

      const unit = await Unit.find(params.id);

      await unit.adm_structure().delete();
      await unit.contacts().delete();
      await unit.public_call().delete();
      await unit.selection_approval().delete();
      await unit.selection_approval().delete();
      await unit.management_contracts().delete();
      await unit.selective_proccess().delete();
      await unit.people().delete();
      await unit.servers().delete();
      await unit.mat_med().delete();
      await unit.accountability().delete();
      await unit.accounting_docs().delete();

      await unit.delete();

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
