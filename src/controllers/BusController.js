
const Tarifa = require('../models/Tarifa');
const Horario = require('../models/Horario');
const Ponto = require('../models/Ponto');

const fs = require('fs');
const readline = require('readline');

const readableTarifa = fs.createReadStream('excel/tarifa-linha.csv');
const readableHorario = fs.createReadStream('excel/quadro-horario.csv');
const readablePonto = fs.createReadStream('excel/ponto-itinerario-sem-coordenadas.csv');

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

async function insertStop(StopData){
    
}
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
    
    async GetLinhaByNum(request,response){

        const { COD_LINH }  = request.query;
        const data = {}

        try{
            if(COD_LINH != ""){
                const bus =  await Tarifa.findOne({ COD_LINH });
                
                console.log(bus);
     
                if(bus)
                     data.bus = bus;
                 else
                     data.msg = "Não foi encontrado nenhuma linha de ônibus com esse número " + COD_LINH;
             }
             
             else{
                 data.msg = "Número de linha inválido!";
             }
        }
        catch(err){
            data.msg = "Erro: " + err;
        }
        
        return response.json({data});
    },

    async GetLinhas(request,response){
       
        const data = {}

        try{
            const bus =  await Tarifa.find();
            if(bus)
                data.bus = bus;
            else
                data.msg = "Não foi encontrado nenhuma linha.";

        }  

        catch(err){
            data.msg = "Erro:" + err;
        }
 
        return response.json({data});
    },

    async GetHorarioByLinha(request,response){
        
        const data ={};
        const { COD_LINH }  = request.query;

        try{
            if(COD_LINH != ""){
                const bus = await Horario.find({COD_LINH});
                if(bus)
                    data.bus = bus;
                else
                    data.msg = "Não foi encontrado horário para linha digitada " + COD_LINH;
            }
            else 
                data.msg = "Número de linha inválido!";
        }
        catch(err){
            data.msg = "Erro:"  + err;
        }

        return response.json({data});
    },    

    async GetRotaLinha(request,response){

        const data ={};
        const { COD_LINH }  = request.query;

        try{
            if(COD_LINH != ""){
                const bus = await Ponto.find({COD_LINH});
                if(bus)
                    data.bus = bus;
                else
                    data.msg = "Não foi encontrado ponto para linha digitada " + COD_LINH;
            }
            else 
                data.msg = "Número de linha inválido!";
        }
        catch(err){
            data.msg = "Erro:"  + err;
        }

        return response.json({data});

    },


};