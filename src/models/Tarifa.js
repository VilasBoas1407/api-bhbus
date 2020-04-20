const mongoose = require('mongoose');
const TarifaSchema = new mongoose.Schema({
    COD_LINH : String,
    NUM_EMPR : String,
    DES_TIPO_TARI : String,
    NOM_LINH: String,
    VAL_TARI : String,
    DAT_VIGE_PLLH : String,
    TIP_TRAN : String
});

module.exports = mongoose.model('Tarifa',TarifaSchema);