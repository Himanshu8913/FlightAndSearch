const { AirplaneRepository } = require('../repository/index');

class AirplaneService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
    }

    async createAirplane(data) { // data-> { name: 'Agra' } == data -> { name }
        try {
            const airplane = await this.airplaneRepository.createAirplane(data);
            return airplane;
        } catch (error) {
            console.log("Something went wrong at service layer.");
            throw {error};
        }
    }

    async deleteAirplane(airplaneId) {
        try {
            const response = await this.airplaneRepository.deleteAirplane(airplaneId);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer.");
            throw {error};
        }
    }

    async updateAirplane(airplaneId, data) {
        try {
            const airplane = await this.airplaneRepository.updateAirplane(airplaneId, data);
            return airplane;
        } catch (error) {
            console.log("Something went wrong at service layer.");
            throw {error};
        }
    }

    async getAirplane(airplaneId) {
        try {
            const airplane = await this.airplaneRepository.getAirplane(airplaneId);
            return airplane;
        } catch (error) {
            console.log("Something went wrong at service layer.");
            throw {error};
        }
    }

    async getAllAirplane(filter) {
        try {
            const airplanes = await this.airplaneRepository.getAllAirplanes({ modelNumber: filter.modelNumber });
            return airplanes;
        } catch (error) {
            console.log("Something went wrong at service layer.");
            throw {error};
        }
    }

}

module.exports = AirplaneService;