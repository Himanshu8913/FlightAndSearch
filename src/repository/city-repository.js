const { City, Airport } = require('../models/index');
const { Op } = require('sequelize');

class CityRepository {
    async createCity( { name }) {  // Here { name } is de-structured object -> obj.name
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer.");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer.");
            throw {error};
        }
    }

    async updateCity(cityId, data) { // data -> {name: "Agra"}
        try {
            // The below approach also work but will not return updated object.
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     }
            // });
            // To get the updated data in mysql we use the below approach.
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer.");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city; 
        } catch (error) {
            console.log("Something went wrong in the repository layer.");
            throw {error};
        }
    }

    async getAllCities(filter) { // filter can be empty -> return all cities
        try {
            if(filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer.");
            throw {error};
        }
    }

    async getAirportsByCity(cityId) {
        try {
            const city = await City.findOne({
                where: {
                    id: cityId
                }
            });
            const airports = await city.getAirports();
            return airports;
        } catch (error) {
            console.log("Something went wrong in the repository layer.");
            throw {error};
        }
        

    }

}

module.exports = CityRepository;