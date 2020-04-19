const { Router } = require('express');
const BusController = require('./controllers/BusController');


const routes = Router();

routes.post('/bus/insert', BusController.saveBus);


module.exports = routes;