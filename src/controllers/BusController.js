
const Tarifa = require('../models/Tarifa');
const Horario = require('../models/Horario');
const Ponto = require('../models/Ponto');
const Parada = require('../models/Stop');


module.exports = {

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

    async GetPontosProximos(request,response){
     
        const data = {};
        const { latitude, longitude } = request.query;

        try{
            const places = await Parada.find(
                {
                  location:
                    { $near :
                       {
                         $geometry: { type: "Point",  coordinates: [ latitude,longitude ] },
                         $minDistance: 0,
                         $maxDistance: 500
                       }
                    }
                }
             )
             if(places){
                 data.places = places;
                 data.status = 200;
             }
             else{
                 data.status = 200;
                 data.msg = "Não encontramos pontos perto da localização fornecida."
             }
            
            return response.json(data);
        }
        catch(err){
            data.msg = "Erro:" + err;
            data.status = 500;
            return response.json(data);
            
        }

    }

};