'use strict'

const Logger = use('Logger')
const Contact = use('App/Models/Contact')


class ContactController {

    async update({ request, response, params }) {

        Logger.info("Update Contact");
        try {

            const data = request.all();
            const contact = await Contact.find(params.id);
            await contact.merge(data);
            await contact.save();

            return contact;

        } catch (error) {
            Logger.error(error)
            return response.status(error.status).json({
                error: {
                    message: "Error when UPDATE Contact",
                    error: error.message
                }
            })
        }
    }

    async delete({ request, response, params }) {

        Logger.info("Destroy Contact");
        try {

            const contact = await Contact.find(params.id);
            await contact.delete();

            return response.status(200).json({
                message: "Success",
            })

        } catch (error) {
            Logger.error(error)
            return response.status(error.status).json({
                error: {
                    message: "Error when UPDATE Contact",
                    error: error.message
                }
            })
        }
    }


}

module.exports = ContactController
