const { Router } = require('express');
const BusController = require('./controllers/BusController');


const routes = Router();

routes.post('/bus/InsertBus', BusController.saveBus);
routes.post('/bus/InsertHorarios', BusController.saveHorario);
routes.post('/bus/InsertPonto', BusController.savePonto);
routes.post('/bus/InsertParadas',BusController.saveParada);

routes.get('/bus/BuscarLinhas', BusController.GetLinhas);
routes.get('/bus/BuscarLinhasByNum', BusController.GetLinhaByNum);
routes.get('/bus/BuscarQuadroHorarioByLinha', BusController.GetHorarioByLinha);
routes.get('/bus/BuscarRotaLinha', BusController.GetRotaLinha);
routes.get('/bus/GetParadasProximas',BusController.GetPontosProximos);

module.exports = routes;
