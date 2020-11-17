'use strict'
const ContractThirdParty = use('App/Models/ContractThirdParty')
class ContractThirdPartyController {


  async update({ request, response, params, auth }) {

    Logger.info("Update ContractThirdParty");
    try {

      await auth.check();

      const data = request.all();
      const contractThirdParty = await ContractThirdParty.find(params.id);


      await contractThirdParty.merge(data);
      await contractThirdParty.save();


      await LogAction.create({
        description: `Atualizou informações de contratos terceirizados para unidade com id ${contractThirdParty.unit_id}`,
        location: "",
        user_id: auth.id
      })

      await Historic.create({
        description: `A unidade teve informações de contratos com terceirizados atualizadas`,
        location: "",
        unit_id: contractThirdParty.unit_id,
        user_id: auth.id
      })

      return contractThirdParty;

    } catch (error) {
      Logger.error(error)
      return response.status(error.status).json({
        error: {
          message: "Error when UPDATE Contract",
          error: error.message
        }
      })
    }
  }

  async delete({ request, response, params }) {

    Logger.info("Destroy ContractThirdParty");
    try {

      const contractThirdParty = await ContractThirdParty.find(params.id);

      await LogAction.create({
        description: `Removeu a informação ${contractThirdParty.name} para unidade com id ${contractThirdParty.unit_id} `,
        location: "",
        user_id: auth.id
      })

      await Historic.create({
        description: `Removeu a informação ${contractThirdParty.name} para unidade com id ${contractThirdParty.unit_id}`,
        location: "",
        user_id: auth.id
      })

      await contractThirdParty.delete();

      return response.status(200).json({
        message: "Success",
      })

    } catch (error) {
      Logger.error(error)
      return response.status(error.status).json({
        error: {
          message: "Error when delete ContractThirdParty",
          error: error.message
        }
      })
    }
  }
}

module.exports = ContractThirdPartyController
