'use strict'

const Logger = use('Logger')
const PublicCall = use('App/Models/PublicCall')

class PublicCallController {


    async update({ request, response, params }) {

        Logger.info("Update PublicCall");
        try {

            const data = request.all();
            const publicCall = await PublicCall.find(params.id);
            await publicCall.merge(data);
            await publicCall.save();

            return publicCall;

        } catch (error) {
            Logger.error(error)
            return response.status(error.status).json({
                error: {
                    message: "Error when UPDATE PublicCall",
                    error: error.message
                }
            })
        }
    }

    async delete({ request, response, params }) {

        Logger.info("Destroy PublicCall");
        try {

            const publicCall = await PublicCall.find(params.id);
            await publicCall.delete();

            return response.status(200).json({
                message: "Success",
            })

        } catch (error) {
            Logger.error(error)
            return response.status(error.status).json({
                error: {
                    message: "Error when UPDATE PublicCall",
                    error: error.message
                }
            })
        }
    }
}

module.exports = PublicCallController
