'use strict'

const Logger = use('Logger')
const MatMed = use('App/Models/MatMed')


class MatMedController {

    async update({ request, response, params }) {

        Logger.info("Update MatMed");
        try {

            const data = request.all();
            const matMed = await MatMed.find(params.id);
            await matMed.merge(data);
            await matMed.save();

            return matMed;

        } catch (error) {
            Logger.error(error)
            return response.status(error.status).json({
                error: {
                    message: "Error when UPDATE MatMed",
                    error: error.message
                }
            })
        }
    }

    async delete({ request, response, params }) {

        Logger.info("Destroy MatMed");
        try {

            const matMed = await MatMed.find(params.id);
            await matMed.delete();

            return response.status(200).json({
                message: "Success",
            })

        } catch (error) {
            Logger.error(error)
            return response.status(error.status).json({
                error: {
                    message: "Error when UPDATE MatMed",
                    error: error.message
                }
            })
        }
    }
}

module.exports = MatMedController
