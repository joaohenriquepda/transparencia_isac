'use strict'

const crypto = require('crypto'); // crypto
const Logger = use('Logger')
const User = use('App/Models/User')
const LogAction = use('App/Models/LogAction')
const Mail = use('Mail')

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

    async delete({ response, params }) {

        Logger.info('Remove user');

        try {
            await auth.check();
            const user = await User.find(params.id);
            await user.delete()

        } catch (error) {
            Logger.error(error)
            return response.status(error.status).json({
                error: {
                    message: "Error when Remove User",
                    error: error.message
                }
            })
        }
    }
    async showActions({ auth, response, request, params }) {

        Logger.info("Show actions")

        try {
            // await auth.check();
            var user = await User.findByOrFail({id: params.id});
            return user.logActions().fetch();

        } catch (error) {
            Logger.error(error)
            // const data = request.all()
            // LogAction.create({
            //     description: `O email ${data.email} não conseguiu recuperar a senha ${error.message}`,
            //     location: "",
            //     ip: "192.0.0.1"
            // })
            return response.status(error.status).json({
                error: {
                    message: "Error when show actions",
                    error: error.message
                }
            })
        }
    }

    async recoveryPassword({ auth, response, request, params }) {

        Logger.info("Recovery Password")
        LogAction.create()

        try {
            const data = request.all()

            LogAction.create({ description: `O email ${data.email} acessou para recuperar a senha`, location: "", ip: "192.0.0.1" })
            const user = await User.findByOrFail("email", data.email);
            const password = await crypto.randomBytes(10).toString('hex')
            user.password = password;

            console.log(password);
            await user.merge({ "password": password })
            await user.save()

            await Mail.send('emails.recovery', { user, password }, (message) => {
                message.to(user.email)
                message.from('contato@isac.org.br')
                message.subject('Recuperação de senha')
            })

            LogAction.create({ description: `O email ${data.email} recebeu o email com nova senha`, location: "", ip: "192.0.0.1" })

        } catch (error) {
            Logger.error(error)
            const data = request.all()
            LogAction.create({
                description: `O email ${data.email} não conseguiu recuperar a senha ${error.message}`,
                location: "",
                ip: "192.0.0.1"
            })
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
