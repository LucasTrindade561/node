require('dotenv').config();
const express = require('express');
const app = express(); 
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('ready'); // Aqui estamos emitindo um sinal, que so quando o app emitir 'ready' a aplicacao vai funcionar
    })
    .catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const {middlewareGlobal} = require('./src/middlewares/middleware');

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.resolve(__dirname, 'public')));

//Nossos proprios middlewares
app.use(middlewareGlobal);
// app.use(outroMiddleware);

app.set('views', path.resolve(__dirname, 'src', 'views')); 
app.set('view engine', 'ejs'); 

app.use(routes);

app.on('ready', () =>{ // Aqui estamos recebendo o emitimento
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
})
