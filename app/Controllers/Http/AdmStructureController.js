'use strict'

const Logger = use('Logger')
const AdmStructure = use('App/Models/AdmStructure')


class AdmStructureController {


    async update({ request, response, params }) {

        Logger.info("Update Administrative Struture");
        try {

            const data = request.all();
            const adm_structure = await AdmStructure.find(params.id);
            await adm_structure.merge(data);
            await adm_structure.save();

            return adm_structure

        } catch (error) {
            Logger.error(error)
            return response.status(error.status).json({
                error: {
                    message: "Error when UPDATE Administrative Struture",
                    error: error.message
                }
            })
        }
    }

    async delete({ request, response, params }) {

        Logger.info("Destroy Administrative Struture");
        try {

            const adm_structure = await AdmStruture.find(params.id);
            await adm_structure.delete();

            return response.status(200).json({
                message: "Success",
            })

        } catch (error) {
            Logger.error(error)
            return response.status(error.status).json({
                error: {
                    message: "Error when UPDATE Administrative Struture",
                    error: error.message
                }
            })
        }
    }



}

module.exports = AdmStructureController
