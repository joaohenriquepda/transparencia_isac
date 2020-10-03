'use strict'

const Logger = use('Logger')
const AccountingDoc = use('App/Models/AccountingDoc')

class AccountingDocController {

    async update({ request, response, params }) {

        Logger.info("Update AccountingDoc");
        try {

            const data = request.all();
            const accountingDoc = await AccountingDoc.find(params.id);
            await accountingDoc.merge(data);
            await accountingDoc.save();

            return accountability

        } catch (error) {
            Logger.error(error)
            return response.status(error.status).json({
                error: {
                    message: "Error when UPDATE Accounting structure",
                    error: error.message
                }
            })
        }
    }

    async delete({ request, response, params }) {

        Logger.info("Destroy AccountingDoc");
        try {

            const accountingDoc = await AccountingDoc.find(params.id);
            await accountingDoc.delete();

            return response.status(200).json({
                message: "Success",
            })

        } catch (error) {
            Logger.error(error)
            return response.status(error.status).json({
                error: {
                    message: "Error when DELETE AccountingDoc Struture",
                    error: error.message
                }
            })
        }
    }
}

module.exports = AccountingDocController
