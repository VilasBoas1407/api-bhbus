const { Router } = require('express');
const BusController = require('./controllers/BusController');


const routes = Router();

routes.post('/bus/InsertBus', BusController.saveBus);
routes.post('/bus/InsertHorarios', BusController.saveHorario);

// routes.get('/bus/BuscarLinhas', BusController.GetLinhas);
// routes.get('/bus/BuscarLinhasByNum', BusController.GetLinhaByNum);


module.exports = routes;