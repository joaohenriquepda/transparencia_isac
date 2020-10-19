'use strict'

const Logger = use('Logger')
const User = use('App/Models/User')

class UserController {


    async create({ request, response }) {

        Logger.info('Create new user');

        try {
            const data = request.all();
            console.log(data);

            const user = await User.create(data)

            return user;

        } catch (error) {
            Logger.error(error)
            return response.status(error.status).json({
                error: {
                    message: "Error when Create User",
                    error: error.message
                }
            })
        }
    }

    async show({ auth, response, params }) {
        Logger.info("Show specific user")
        try {
            await auth.check();
            const user = await User.find(params.id);

            return user;
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

    async update({ auth, response, request, params }) {

        Logger.info("Update information specific user")

        try {
            await auth.check()
            const data = request.all()

            const user = await User.find(params.id);

            user.merge(data);
            user.save();
        } catch (error) {
            Logger.error(error)
            return response.status(error.status).json({
                error: {
                    message: "Error when Update User",
                    error: error.message
                }
            })
        }
    }


}

module.exports = UserController
