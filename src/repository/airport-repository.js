
/*const { Airport } = require('../models/index');
const { Op } = require('sequelize');

class AirportRepository {
    async createAirport({ name, cityId }) {
        try {
            const airport = await Airport.create({ name, cityId });
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer.");
            throw {error};
        }
    }

    async deleteAirport(airportId) {
        try {
            await Airport.destroy({
                where: {
                    id: airportId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer.");
            throw {error};
        }
    }

    async getAirport(airportId) {
        try {
            const airport = await Airport.findByPk(airportId);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer.");
            throw {error};
        }
    }

    async updateAirport(airportId, data) {
        try {
            const airport = await Airport.findByPk(airportId);
            airport.name = data.name;
            await airport.save();
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer.");
            throw {error};
        }
    }

    async getAllAirport(filter) {
        try {
            if(filter.name) {
                const airports = await Airport.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return airports;
            }
            const airports = await Airport.findAll();
            return airports; 
        } catch (error) {
            console.log("Something went wrong in the repository layer.");
            throw {error};
        }
    }
}
*/

const CrudRepository = require('./crud-repository');
const { Airport } = require('../models/index');
class AirportRepository extends CrudRepository {
    constructor() {
        super(Airport);
    }
}
module.exports = AirportRepository;

