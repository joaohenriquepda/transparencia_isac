'use strict'

const Logger = use('Logger')
const AdmStructure = use('App/Models/AdmStructure')


class AdmStructureController {


    async update({ request, response, params, auth }) {

        Logger.info("Update Administrative Struture");
        try {
            await auth.check();
            const data = request.all();
            const adm_structure = await AdmStructure.find(params.id);
            await adm_structure.merge(data);
            await adm_structure.save();

            return adm_structure

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

    async delete({ request, response, params, auth }) {

        Logger.info("Destroy Administrative Struture");
        try {

            await auth.check();
            const adm_structure = await AdmStructure.find(params.id);
            await adm_structure.delete();

            return response.status(200).json({
                message: "Success",
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



}

module.exports = AdmStructureController
