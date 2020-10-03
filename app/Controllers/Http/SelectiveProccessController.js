'use strict'

const Logger = use('Logger')
const SelectiveProccess = use('App/Models/SelectiveProccess')

class SelectiveProccessController {

    async update({ request, response, params }) {

        Logger.info("Update Selective Proccess");
        try {

            const data = request.all();
            const selectiveProccess = await SelectiveProccess.find(params.id);
            await selectiveProccess.merge(data);
            await selectiveProccess.save();

            return selectiveProccess;

        } catch (error) {
            Logger.error(error)
            return response.status(error.status).json({
                error: {
                    message: "Error when UPDATE Selective Proccess",
                    error: error.message
                }
            })
        }
    }

    async delete({ request, response, params }) {

        Logger.info("Destroy Selective Proccess");
        try {

            const selectiveProccess = await SelectiveProccess.find(params.id);
            await selectiveProccess.delete();

            return response.status(200).json({
                message: "Success",
            })

        } catch (error) {
            Logger.error(error)
            return response.status(error.status).json({
                error: {
                    message: "Error when UPDATE Selective Proccess",
                    error: error.message
                }
            })
        }
    }

}

module.exports = SelectiveProccessController
