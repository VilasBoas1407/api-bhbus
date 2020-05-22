const mongoose = require('mongoose');
const StopSchema = new mongoose.Schema({
    ID_STOP : String,
    NOME_STOP : String,
    DESC_STOP : String,
    LAT_STOP : String, //LATITUDE
    LONG_STOP: String, //LONGITUDE
    LOCATION_TYPE : String,
    PARENT_STOP : String
});

module.exports = mongoose.model('Parada',StopSchema);