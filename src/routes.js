const { Router } = require('express');
const BusController = require('./controllers/BusController');
const StoredController = require('./controllers/StoredController');

const routes = Router();

routes.post('/bus/InsertBus', StoredController.saveBus);
routes.post('/bus/InsertHorarios', StoredController.saveHorario);
routes.post('/bus/InsertPonto', StoredController.savePonto);
routes.post('/bus/InsertParadas',StoredController.saveParada);

routes.get('/bus/BuscarLinhas', BusController.GetLinhas);
routes.get('/bus/BuscarLinhasByNum', BusController.GetLinhaByNum);
routes.get('/bus/BuscarQuadroHorarioByLinha', BusController.GetHorarioByLinha);
routes.get('/bus/BuscarRotaLinha', BusController.GetRotaLinha);
routes.get('/bus/GetParadasProximas',BusController.GetPontosProximos);

module.exports = routes;
