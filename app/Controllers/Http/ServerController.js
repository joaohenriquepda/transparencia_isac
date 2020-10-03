'use strict'

const Logger = use('Logger')
const Server = use('App/Models/Server')

class ServerController {

    async update({ request, response, params }) {

        Logger.info("Update Server");
        try {

            const data = request.all();
            const server = await Server.find(params.id);
            await server.merge(data);
            await server.save();

            return server;

        } catch (error) {
            Logger.error(error)
            return response.status(error.status).json({
                error: {
                    message: "Error when UPDATE Server",
                    error: error.message
                }
            })
        }
    }

    async delete({ request, response, params }) {

        Logger.info("Destroy Server");
        try {

            const server = await Server.find(params.id);
            await server.delete();

            return response.status(200).json({
                message: "Success",
            })

        } catch (error) {
            Logger.error(error)
            return response.status(error.status).json({
                error: {
                    message: "Error when UPDATE Server",
                    error: error.message
                }
            })
        }
    }
}

module.exports = ServerController
