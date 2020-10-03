'use strict'

const Logger = use('Logger')
const ManagementContract = use('App/Models/ManagementContract')

class ManagementContractController {

    async update({ request, response, params }) {

        Logger.info("Update ManagementContract");
        try {

            const data = request.all();
            const managementContract = await ManagementContract.find(params.id);
            await managementContract.merge(data);
            await managementContract.save();

            return managementContract;

        } catch (error) {
            Logger.error(error)
            return response.status(error.status).json({
                error: {
                    message: "Error when UPDATE ManagementContract",
                    error: error.message
                }
            })
        }
    }

    async delete({ request, response, params }) {

        Logger.info("Destroy ManagementContract");
        try {

            const managementContract = await ManagementContract.find(params.id);
            await managementContract.delete();

            return response.status(200).json({
                message: "Success",
            })

        } catch (error) {
            Logger.error(error)
            return response.status(error.status).json({
                error: {
                    message: "Error when UPDATE ManagementContract",
                    error: error.message
                }
            })
        }
    }

}

module.exports = ManagementContractController
