const express = require('express');

const { FlightMiddlewares } = require('../../middlewares/index');

const CityController = require('../../controllers/city-controller');
const AirportController = require('../../controllers/airport-controller');
const AirplaneController = require('../../controllers/airplane-controller');
const FlightController = require('../../controllers/flight-controller');

const router = express.Router();

// City Routes
router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.patch('/city/:id', CityController.update);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.get('/city/airports/:id', CityController.getAllAirports);

// Airport Routes
router.post('/airport', AirportController.create);
router.delete('/airport/:id', AirportController.destroy);
router.patch('/airport/:id', AirportController.update);
router.get('/airport/:id', AirportController.get);
router.get('/airport', AirportController.getAll);

// Airplane Routes
router.post('/airplane', AirplaneController.create);
router.delete('/airplane/:id', AirplaneController.destroy);
router.patch('/airplane/:id', AirplaneController.update);
router.get('/airplane/:id', AirplaneController.get);
router.get('/airplane', AirplaneController.getAll);

// Flight Routes
router.post(
    '/flights',
    FlightMiddlewares.validateCreateFlight,
    FlightController.create
);
router.get('/flights', FlightController.getAll);
router.get('/flights/:id', FlightController.get);
router.patch('/flights/:id', FlightController.update);

module.exports = router;