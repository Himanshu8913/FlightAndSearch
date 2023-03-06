const { CityService } = require('../services/index');
const { SuccessCodes, ClientErrorCodes, ServerErrorCodes } = require('../utils/error-codes');

const cityService = new CityService();

// POST -> /city --> req.body
const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data: city,
            success: true,
            message: 'Successfully created a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to create a city',
            err: error
        });
    }
}

// DELETE -> /city/:id --> req.params.id
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully deleted a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to delete a city',
            err: error
        });
    }
}

// GET -> /city/:id --> req.params.id
const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to get a city',
            err: error
        });
    }
}

// PATCH -> /city/:id -> req.params.id
const update = async (req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            data: city,
            success: true,
            message: 'Successfully update a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to update a city',
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(SuccessCodes.OK).json({
            data: cities,
            success: true,
            message: 'Successfully fetched all cities',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to fetch all cities',
            err: error
        });
    }
}

const getAllAirports = async (req, res) => {
    try {
        const airports = await cityService.getAirportsByCity(req.params.id);
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
    getAll,
    getAllAirports
}