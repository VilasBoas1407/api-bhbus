const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');
const StopSchema = new mongoose.Schema({
    ID_STOP : String,
    NOME_STOP : String,
    DESC_STOP : String,
    location: {
        type: PointSchema,
        index: '2dsphere'
    },
    PARENT_STOP : String
});

module.exports = mongoose.model('Parada',StopSchema);