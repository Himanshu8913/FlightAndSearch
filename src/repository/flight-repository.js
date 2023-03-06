const { Flight } = require('../models/index');
const { Op } = require('sequelize');

class FlightRepository {

    #createFilter(data) {
        let filter = {};
        // let filter = {...data}; => arrivalAirportId, departureAirportId
        if(data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        // if(data.minPrice && data.maxPrice) {
        //     Object.assign(filter, {
        //         [Op.and]: [
        //             { price: {[Op.gte]: data.minPrice} },
        //             { price: {[Op.lte]: data.maxPrice} }
        //         ]
        //     });
        // }
        let priceFilter = [];
        if(data.minPrice) {
            // Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
            priceFilter.push({price: {[Op.gte]: data.minPrice}});
        }
        if(data.maxPrice) {
            // Object.assign(filter, {price: {[Op.lte]: data.maxPrice}});
            priceFilter.push({price: {[Op.lte]: data.maxPrice}});
        }
        // console.log("Get Price :", priceFilter);
        Object.assign(filter, {[Op.and]: priceFilter});
        // Object.assign(filter, {[Op.and]: [{ price: {[Op.lte]: 7000} }, { price: {[Op.gte]: 4000} }]})
        console.log(filter);
        return filter;
    }

    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer.");
            throw {error};
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flight.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer.");
            throw {error};
        }
    }

    async getAllFlights(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flight.findAll({
                where: filterObject
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer.");
            throw {error};
        }
    }

    async updateFlights(flightId, data) {
        try {
            await Flight.update(data, {
                where: {
                    id: flightId
                }
            });
        } catch (error) {
            console.log("Something went wrong in the repository layer.");
            throw {error};
        }
    }
}

module.exports = FlightRepository;

/**
 * createFilter-->
 * where: {
 *  arrivalAirportId: 2,
 *  departureAirportId: 4,
 *  price: {[Op.gte]: 4000}
 * }
 */