const { AirplaneService } = require('../services/index');
const { SuccessCodes, ServerErrorCodes } = require('../utils/error-codes');

const airplaneService = new AirplaneService();

// POST -> /city --> req.body
const create = async (req, res) => {
    try {
        const response = await airplaneService.createAirplane(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data: response,
            success: true,
            message: 'Successfully created the airplane',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to create a new airplane',
            err: error
        });
    }
}

// DELETE -> /city/:id --> req.params.id
const destroy = async (req, res) => {
    try {
        const response = await airplaneService.deleteAirplane(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully deleted the airplane',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to delete an airplane',
            err: error
        });
    }
}

// GET -> /city/:id --> req.params.id
const get = async (req, res) => {
    try {
        const response = await airplaneService.getAirplane(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully fetched the airplane',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to get an airplane',
            err: error
        });
    }
}

// PATCH -> /city/:id -> req.params.id
const update = async (req, res) => {
    try {
        const airplane = await airplaneService.updateAirplane(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            data: airplane,
            success: true,
            message: 'Successfully update the airplane',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to update the airplane',
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const airplanes = await airplaneService.getAllAirplane(req.query);
        return res.status(SuccessCodes.OK).json({
            data: airplanes,
            success: true,
            message: 'Successfully fetched all airplanes',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to fetch all airplanes',
            err: error
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}