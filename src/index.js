const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

//Conexão com banco de dados
mongoose.connect('mongodb+srv://apibh:apibh@cluster0-jxkcj.mongodb.net/OnTimeBus?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Especificando o tipo de data que vai ser utilizado
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});