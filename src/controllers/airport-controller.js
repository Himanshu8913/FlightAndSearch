const { AirportService } = require('../services/index');
const { SuccessCodes, ClientErrorCodes, ServerErrorCodes } = require('../utils/error-codes');

const airportService = new AirportService();

// POST -> /city --> req.body
const create = async (req, res) => {
    try {
        const airport = await airportService.createAirport(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data: airport,
            success: true,
            message: 'Successfully created a airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to create a airport',
            err: error
        });
    }
}

const destroy = async (req, res) => {
    try {
        const response = await airportService.deleteAirport(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully deleted a airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to delete a airport',
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const response = await airportService.getAirport(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully fetched a airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to fetch a airport',
            err: error
        });
    }
}

const update = async (req, res) => {
    try {
        const airport = await airportService.updateAirport(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            data: airport,
            success: true,
            message: 'Successfully updated a airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to update a airport',
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const airports = await airportService.getAllAirport(req.query);
        return res.status(SuccessCodes.OK).json({
            data: airports,
            success: true,
            message: 'Successfully fetched all airports',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to fetch all airports',
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