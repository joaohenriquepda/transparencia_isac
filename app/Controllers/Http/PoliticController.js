'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */


const Logger = use('Logger')
const Politic = use('App/Models/Politics')
/**
 * Resourceful controller for interacting with politics
 */
class PoliticController {

  async update({ request, response, params }) {

    Logger.info("Update Politic");
    try {

      const data = request.all();
      const politic = await Politic.find(params.id);
      await politic.merge(data);
      await politic.save();

      return politic;

    } catch (error) {
      Logger.error(error)
      return response.status(error.status).json({
        error: {
          message: "Error when UPDATE politic",
          error: error.message
        }
      })
    }
  }

  async delete({ request, response, params }) {

    Logger.info("Destroy politic");
    try {

      const politic = await Politic.find(params.id);
      await politic.delete();

      return response.status(200).json({
        message: "Success",
      })

    } catch (error) {
      Logger.error(error)
      return response.status(error.status).json({
        error: {
          message: "Error when UPDATE politic",
          error: error.message
        }
      })
    }
  }

}

module.exports = PoliticController
