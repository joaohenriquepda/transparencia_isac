'use strict'

const Logger = use('Logger')
const LogAction = use('App/Models/LogAction')


class LogActionController {

    async all({ auth, response, params }) {
        Logger.info("Show all logs")
        try {
            // await auth.check();
            // const user = await User.find(params.id);

            return await LogAction.all();
        } catch (error) {
            Logger.error(error)
            return response.status(error.status).json({
                error: {
                    message: "Error when Get Specific User",
                    error: error.message
                }
            })
        }
    }

}

module.exports = LogActionController
