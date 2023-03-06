/*const { AirportRepository } = require('../repository/index');

class AirportService {
    constructor() {
        this.airportRepository = new AirportRepository();
    }

    async createAirport({ name, cityId }) { // data-> { name: 'Agra' } == data -> { name }
        try {
            const airport = await this.airportRepository.createAirport({ name, cityId });
            return airport;
        } catch (error) {
            console.log("Something went wrong at service layer.");
            throw {error};
        }
    }

    async deleteAirport(airportId) {
        try {
            const response = await this.airportRepository.deleteAirport(airportId);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer.");
            throw {error};
        }
    }

    async getAirport(airportId) {
        try {
            const airport = await this.airportRepository.getAirport(airportId);
            return airport;
        } catch (error) {
            console.log("Something went wrong at service layer.");
            throw {error};
        }
    }

    async updateAirport(airportId, data) {
        try {
            const airport = await this.airportRepository.updateAirport(airportId, data);
            return airport;
        } catch (error) {
            console.log("Something went wrong at service layer.");
            throw {error};
        }
    }

    async getAllAirport(filter) {
        try {
            const airports = await this.airportRepository.getAllAirport({name: filter.name});
            return airports;
        } catch (error) {
            console.log("Something went wrong at service layer.");
            throw {error};
        }
    }
}
*/

const CrudService = require('./crud-service');
const { AirportRepository } = require('../repository/index');

class AirportService extends CrudService {
    constructor() {
        const airportRespository = new AirportRepository();
        super(airportRespository);
    }
}

module.exports = AirportService;