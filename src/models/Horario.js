const mongoose = require('mongoose');
const HorarioSchema = new mongoose.Schema({
    COD_LINH : String,
    NUM_SUBL : String,
    DES_PONT_CTRL : String,
    DES_TIPO_DIA: String,
    HOR_SAID_VIAG : String,
    MIN_SAID_VIAG  : String,
    NOM_LINH : String,
    NOM_SUBL : String,
    DAT_VIGE_ESPF: String,
    IND_VEIC_ESPC: String,
    TIP_TRAN: String
});

module.exports = mongoose.model('Horario',HorarioSchema);