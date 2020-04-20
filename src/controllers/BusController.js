
const Tarifa = require('../models/Tarifa');
const Horario = require('../models/Horario');

const fs = require('fs');
const readline = require('readline');

const readableTarifa = fs.createReadStream('excel/tarifa-linha.csv');
const readableHorario = fs.createReadStream('excel/quadro-horario.csv');

//Populando tabelas do banco a partir do excel disponibilizado
async function insertData(TarifaData){
    
    TarifaData.forEach(b => {

      var arrayTarifa = b.split(';');

        const tarifa = {
            COD_LINH: arrayTarifa[0],
            NUM_EMPR: arrayTarifa[1],            
            DES_TIPO_TARI: arrayTarifa[2],
            NOM_LINH: arrayTarifa[3],
            VAL_TARI: arrayTarifa[4],
            DAT_VIGE_PLLH: arrayTarifa[5],
            TIP_TRAN: arrayTarifa[6]
        }
        
        Tarifa.create(tarifa);

    });
};

//Populando tabelas do banco a partir do excel disponibilizado
async function insertHorario(HorarioData){

    HorarioData.forEach(h =>{

        var arrayHorario = h.split(';');
        console.log(arrayHorario);

    });
};

module.exports = {


   async saveBus(request, response){
  
        const tarifaData = [];

        const rl = readline.createInterface({
            input: readableTarifa,
        });
    
        rl.on('line', (line)=>{
            tarifaData.push(line);
        });

        rl.on('close',cb=>{
            insertData(tarifaData);
        });

        response = "OK";
        return response;
    },

    async saveHorario(){

        const HorarioData = [];

        const rl = readline.createInterface({
            input: readableHorario,
        });
    
        rl.on('line', (line)=>{
            HorarioData.push(line);
        });

        rl.on('close',cb=>{
            insertHorario(HorarioData);
        });

        response = "OK";
        return response;
    },     
};