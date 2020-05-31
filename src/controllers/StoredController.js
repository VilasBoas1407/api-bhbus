const Tarifa = require('../models/Tarifa');
const Horario = require('../models/Horario');
const Ponto = require('../models/Ponto');
const Parada = require('../models/Stop');


const fs = require('fs');
const readline = require('readline');

const readableTarifa = fs.createReadStream('excel/tarifa-linha.csv');
const readableHorario = fs.createReadStream('excel/quadro-horario.csv');
const readablePonto = fs.createReadStream('excel/ponto-itinerario-sem-coordenadas.csv');
const readableParada = fs.createReadStream('excel/pontos-coordenadas.csv');

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
        
        const horario = {
            COD_LINH : arrayHorario[0],
            NUM_SUBL : arrayHorario[1],
            DES_PONT_CTRL : arrayHorario[2],
            DES_TIPO_DIA: arrayHorario[3],
            HOR_SAID_VIAG : arrayHorario[4],
            MIN_SAID_VIAG  : arrayHorario[5],
            NOM_LINH : arrayHorario[6],
            NOM_SUBL : arrayHorario[7],
            DAT_VIGE_ESPF: arrayHorario[8],
            IND_VEIC_ESPC: arrayHorario[9],
            TIP_TRAN: arrayHorario[10]
        }

        Horario.create(horario);
       

    });
};

async function insertPonto(PontoData){
    
    console.log(PontoData);

    PontoData.forEach(b => {

      var arrayPonto = b.split(';');

        const ponto = {
            COD_LINH : arrayPonto[0],
            NUM_SUBL : arrayPonto[1],
            NUM_PONT_CTRL_ORIG : arrayPonto[2],
            NUM_SEQU_ITIN: arrayPonto[3],
            NUM_SEQU_PONT: arrayPonto[4],
            NOM_LINH : arrayPonto[5],
            NOM_SUBL : arrayPonto[6],
            DES_PONT_CTRL : arrayPonto[7],
            NOM_MUNC : arrayPonto[8],
            TIP_LOGR : arrayPonto[9],
            NOM_LOGR : arrayPonto[10],
            NUM_IMOV : arrayPonto[11],
            DAT_VIGE_ESPF : arrayPonto[12]
        }
        
        Ponto.create(ponto);

    });
};

async function insertParada(ParadaData){    
    ParadaData.forEach(function(p){
        var arrayParada = p.split(',');

        const location = {
            type: 'Point',
            coordinates: [arrayParada[4].replace(";;",""),arrayParada[3]]
        }
        console.log(location)
        const Paradas = {
            ID_STOP : arrayParada[0],
            NOME_STOP: arrayParada[1],
            DESC_STOP: arrayParada[2],
            location
        }
      
        Parada.create(Paradas);
    });

    return true;
};

module.exports = {
    
   async saveBus(){
  
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

    rl.on('resume', call=>{
        response = "OK";
        return response;
    });        
},   

async savePonto(){

    const PontoData = [];

    const rl = readline.createInterface({
        input: readablePonto,
    });

    rl.on('line', (line)=>{
        PontoData.push(line);
    });

    rl.on('close',cb=>{
        insertPonto(PontoData);
    });

    rl.on('resume', call=>{
        response = "OK";
        return response;
    });        
},  

async saveParada(){
    const ParadaData = [];
    var count = 0;
    const rl = readline.createInterface({
        input: readableParada,
    });

    rl.on('line', (line)=>{
        console.log("Inserindo: ",count);
        ParadaData.push(line);
        count++;
    });

    rl.on('close',cb=>{
        insertParada(ParadaData);
    });

    rl.on('resume', call=>{
        response = "OK";
        return response;
    }); 


},
}