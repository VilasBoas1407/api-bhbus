
const Bus = require('../models/Bus');

const fs = require('fs');
const readline = require('readline');

const readable = fs.createReadStream('excel/tarifa-linha.csv');


async function insertData(busData){
    
    busData.forEach(b => {

      var arrayBus = b.split(';');

        const bus = {
            COD_LINH: arrayBus[0],
            NUM_EMPR: arrayBus[1],            
            DES_TIPO_TARI: arrayBus[2],
            NOM_LINH: arrayBus[3],
            VAL_TARI: arrayBus[4],
            DAT_VIGE_PLLH: arrayBus[5],
            TIP_TRAN: arrayBus[6]
        }
        
        Bus.create(bus);

    });

};

module.exports = {


   async saveBus(request, response){
  
        const busData = [];

        const rl = readline.createInterface({
            input: readable,
        });
    
        rl.on('line', (line)=>{
            busData.push(line);
        });

        rl.on('close',cb=>{
            insertData(busData);
        });

        response.status = "OK";
        return response;
    },
    
};