'use strict'

const Logger = use('Logger')
const SelectionApproval = use('App/Models/SelectionApproval')

class SelectionApprovalController {

    async update({ request, response, params }) {

        Logger.info("Update Selection Approval");
        try {

            const data = request.all();
            const selectionApproval = await SelectionApproval.find(params.id);
            await selectionApproval.merge(data);
            await selectionApproval.save();

            return selectionApproval;

        } catch (error) {
            Logger.error(error)
            return response.status(error.status).json({
                error: {
                    message: "Error when UPDATE Selection Approval",
                    error: error.message
                }
            })
        }
    }

    async delete({ request, response, params }) {

        Logger.info("Destroy Selection Approval");
        try {

            const selectionApproval = await SelectionApproval.find(params.id);
            await selectionApproval.delete();

            return response.status(200).json({
                message: "Success",
            })

        } catch (error) {
            Logger.error(error)
            return response.status(error.status).json({
                error: {
                    message: "Error when UPDATE Selection Approval",
                    error: error.message
                }
            })
        }
    }

}

module.exports = SelectionApprovalController
