'use strict'

const Logger = use('Logger')
const Accountability = use('App/Models/Accountability')


class AccountabilityController {
    
    async update({ request, response, params }) {

        Logger.info("Update Accountability");
        try {

            const data = request.all();
            const accountability = await Accountability.find(params.id);
            await accountability.merge(data);
            await accountability.save();

            return accountability

        } catch (error) {
            Logger.error(error)
            return response.status(error.status).json({
                error: {
                    message: "Error when UPDATE Accountability structure",
                    error: error.message
                }
            })
        }
    }

    async delete({ request, response, params }) {

        Logger.info("Destroy Accountability");
        try {

            const accountability = await Accountability.find(params.id);
            await accountability.delete();

            return response.status(200).json({
                message: "Success",
            })

        } catch (error) {
            Logger.error(error)
            return response.status(error.status).json({
                error: {
                    message: "Error when UPDATE Accountability Struture",
                    error: error.message
                }
            })
        }
    }

}

module.exports = AccountabilityController
