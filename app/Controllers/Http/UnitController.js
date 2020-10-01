'use strict'

const Logger = use('Logger')
const Unit = use('App/Models/Unit')

class UnitController {
  /**
   * Show a list of all units.
   * GET units
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {

    Logger.info("Show All units");
    try {
      return await Unit.all();

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

  async create({ request, response, view }) {

    Logger.info("Create new Unit");
    try {

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

  async show({ params, request, response, view }) {
    Logger.info("Show Specific unit");
    try {
      // const data = request.all();
      const unit = await Unit.find(params.id);
      const adm_struture = await unit.adm_struture().fetch();
      const contacts = await unit.contacts().fetch();
      const public_call = await unit.public_call().fetch();
      const selection_approval = await unit.selection_approval().fetch()
      const management_contracts = await unit.management_contracts().fetch()
      const selective_proccess = await unit.selective_proccess().fetch()
      const people = await unit.people().fetch()
      const servers = await unit.servers().fetch()
      const mat_med = await unit.mat_med().fetch()
      const accountability = await unit.accountability().fetch()
      const accounting_docs = await unit.accounting_docs().fetch()

      unit.adm_struture = adm_struture;
      unit.contacts = contacts;
      unit.public_call = public_call;
      unit.selection_approval = selection_approval
      unit.management_contracts = management_contracts
      unit.selective_proccess = selective_proccess
      unit.people = people
      unit.servers = servers
      unit.mat_med = mat_med
      unit.accountability = accountability
      unit.accounting_docs = accounting_docs

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

  async addAdmStruture({ params, request, response, view }) {
    Logger.info("Add Administrative Struture");
    try {
      const data = request.all();

      const unit = await Unit.find(params.id);
      unit.adm_struture().create(data);

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
    Logger.info("Add SelectionApproval");
    try {
      const data = request.all();

      const unit = await Unit.find(params.id);
      unit.management_contracts().create(data);
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
          message: "Error when Create Selection Approval",
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
          message: "Error when Create Selection Approval",
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
   * Update unit details.
   * PUT or PATCH units/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a unit with id.
   * DELETE units/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = UnitController
