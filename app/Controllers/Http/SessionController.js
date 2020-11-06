'use strict'
const User = use('App/Models/User')
const LogAction = use('App/Models/LogAction')
const Logger = use('Logger')

class SessionController {

    async create({ request, auth, response }) {
        Logger.info("Login System");

        try {
            const { email, password } = request.all()
            LogAction.create({
                description: `O email ${email} acessou para logar`,
                location: "",
                ip: "192.0.0.1"
            })
            const token = await auth.attempt(email, password)
            const user = await User.query().where('email', email).select('id', 'role').first()
            token.id = user.id
            token.role = user.role

            LogAction.create({
                description: `Login realizado com sucesso`,
                location: "",
                ip: "192.0.0.1",
                user_id: user.id
            })

            console.log(token);
            return token

        } catch (error) {
            Logger.error(error.message)
            
            let status = error.status;
            if (status === undefined) {
                status = 500
            }
            
            const { email } = request.all()

            LogAction.create({
                description: `O email ${email} não conseguiu logar no sistema ${error.message}`,
                location: "",
                ip: "192.0.0.1"
            })
 
            return response.status(status).json({
                message: error.message,
                status: status

            });

        }





    }

}

module.exports = SessionController