'use strict'
const User = use('App/Models/User')

class SessionController {

    async create({ request, auth }) {
        const { email, password } = request.all()

        const token = await auth.attempt(email, password)
        const user = await User.query().where('email', email).select('id', 'role').first()
        token.id = user.id
        token.role = user.role

        console.log(token);
        return token
    }

}

module.exports = SessionController