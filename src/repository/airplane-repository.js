const { Airplane } = require('../models/index');
const { Op } = require('sequelize');

class AirplaneRepository {
    async createAirplane({ modelNumber }) {
        try {
            const airplane = await Airplane.create({ modelNumber });
            return airplane;
        } catch (error) {
            console.log("Something went wrong in the repository layer.");
            throw {error};
        }
    }

    async deleteAirplane(airplaneId) {
        try {
            await Airplane.destroy({
                where: {
                    id: airplaneId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer.");
            throw {error};
        }
    }

    async updateAirplane(airplaneId, data) { // data -> {name: "Agra"}
        try {
            const airplane = await Airplane.findByPk(airplaneId);
            airplane.modelNumber = data.modelNumber;
            await airplane.save();
            return airplane;
        } catch (error) {
            console.log("Something went wrong in the repository layer.");
            throw {error};
        }
    }

    async getAirplane(airplaneId) {
        try {
            const airplane = await Airplane.findByPk(airplaneId);
            return airplane; 
        } catch (error) {
            console.log("Something went wrong in the repository layer.");
            throw {error};
        }
    }

    async getAllAirplanes(filter) { // filter can be empty -> return all cities
        try {
            if(filter.modelNumber) {
                const airplanes = await Airplane.findAll({
                    where: {
                        modelNumber: {
                            [Op.startsWith]: filter.modelNumber
                        }
                    }
                });
                return airplanes;
            }
            const airplanes = await Airplane.findAll();
            return airplanes;
        } catch (error) {
            console.log("Something went wrong in the repository layer.");
            throw {error};
        }
    }

}

module.exports = AirplaneRepository;