
const mongoose = require('mongoose');
const PontoSchema = new mongoose.Schema({
    COD_LINH : String,
    NUM_SUBL : String,
    NUM_PONT_CTRL_ORIG : String,
    NUM_SEQU_ITIN: String,
    NUM_SEQU_PONT: String,
    NOM_LINH : String,
    NOM_SUBL : String,
    DES_PONT_CTRL : String,
    NOM_MUNC : String,
    TIP_LOGR : String,
    NOM_LOGR : String,
    NUM_IMOV : String,
    DAT_VIGE_ESPF : String
});

module.exports = mongoose.model('Ponto',PontoSchema);