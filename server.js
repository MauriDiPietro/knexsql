const express = require('express');
const morgan = require('morgan');
const PORT = 8080

const app = express();

const vehiculos = require('./routes/routes.vehiculos.js');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/vehiculos', vehiculos);

app.listen(PORT, ()=>{
    console.log(`Server ok en puerto ${PORT}`)
});

module.exports = app