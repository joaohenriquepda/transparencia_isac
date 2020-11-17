'use strict'

const crypto = require('crypto'); // crypto
const Logger = use('Logger')
const User = use('App/Models/User')
const LogAction = use('App/Models/LogAction')
const Mail = use('Mail')
const Database = use('Database')

class UserController {

    async all({ auth, response }) {
        Logger.info('Return all users');
        try {
            await auth.check();
            let sqlCommand = "SELECT * FROM users ORDER BY name ASC"
            const users = await Database.raw(sqlCommand);

            return users.rows;
        } catch (error) {
            Logger.error(error)
            let status = error.status;
            if (status === undefined) {
                status = 500
            }

            return response.status(status).json({
                message: error,
                status: status
            });
        }
    }


    async create({ request, response, auth }) {

        Logger.info('Create new user');

        try {
            const data = request.all();

            console.log(data);

            const user = await User.create(data)

            return user;

        } catch (error) {

            console.log(error);
            let status = error.status;
            if (status === undefined) {
                status = 500
            }

            return response.status(status).json({
                message: error,
                status: status
            });
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
            let status = error.status;
            if (status === undefined) {
                status = 500
            }

            return response.status(status).json({
                message: error,
                status: status
            });
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

            await LogAction.create({
                description: `Alterou as informações a ${user.name} com identificador ${user.id} com sucesso`,
                location: "",
                ip: "192.0.0.1",
                user_id: auth.id
              })     


        } catch (error) {
            Logger.error(error)

            let status = error.status;
            if (status === undefined) {
                status = 500
            }

            return response.status(status).json({
                message: error,
                status: status
            });
        }
    }

    async delete({ response, params, auth }) {

        Logger.info('Remove user');

        try {
            await auth.check();
            const user = await User.find(params.id);

            user.merge({ status: 0 });
            await user.save();


            await LogAction.create({
                description: `Alterou o status para inativo de ${user.name} com identificador ${user.id} com sucesso`,
                location: "",
                ip: "192.0.0.1",
                user_id: auth.id
              })

        } catch (error) {
            Logger.error(error)
            let status = error.status;
            if (status === undefined) {
                status = 500
            }

            return response.status(status).json({
                message: error,
                status: status
            });
        }
    }
    async showActions({ auth, response, request, params }) {

        Logger.info("Show actions")

        try {
            // await auth.check();
            var user = await User.findByOrFail({ id: params.id });
            return user.logActions().fetch();

        } catch (error) {
            Logger.error(error)
            // const data = request.all()
            // LogAction.create({
            //     description: `O email ${data.email} não conseguiu recuperar a senha ${error.message}`,
            //     location: "",
            //     ip: "192.0.0.1"
            // })
            let status = error.status;
            if (status === undefined) {
                status = 500
            }

            return response.status(status).json({
                message: error,
                status: status
            });
        }
    }

    async recoveryPassword({ auth, response, request, params }) {

        Logger.info("Recovery Password")

        try {
            const data = request.all()
            console.log(data);
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
            let status = error.status;
            if (status === undefined) {
                status = 500
            }

            return response.status(status).json({
                message: error,
                status: status
            });
        }
    }

}

module.exports = UserController
