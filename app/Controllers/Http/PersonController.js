'use strict'

const Logger = use('Logger')
const Person = use('App/Models/Person')

class PersonController {


    async update({ request, response, params }) {

        Logger.info("Update Person");
        try {

            const data = request.all();
            const person = await Person.find(params.id);
            await person.merge(data);
            await person.save();

            return person;

        } catch (error) {
            Logger.error(error)
            return response.status(error.status).json({
                error: {
                    message: "Error when UPDATE Person",
                    error: error.message
                }
            })
        }
    }

    async delete({ request, response, params }) {

        Logger.info("Destroy Person");
        try {

            const person = await Person.find(params.id);
            await person.delete();

            return response.status(200).json({
                message: "Success",
            })

        } catch (error) {
            Logger.error(error)
            return response.status(error.status).json({
                error: {
                    message: "Error when UPDATE Person",
                    error: error.message
                }
            })
        }
    }

}

module.exports = PersonController
