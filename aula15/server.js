require('dotenv').config();
const express = require('express');
const app = express(); 
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('ready'); 
    })
    .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash'); // mostra uma vez e dps deixa de existir

const routes = require('./routes');
const path = require('path');
const {middlewareGlobal} = require('./src/middlewares/middleware');

app.use(express.urlencoded({extended:true}));

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOption = session({
    secret: 'lucas trindade schmitz gostosao',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }), // aonde vai ser salvo a session
    resave: false, // se vai resalvar cada vez que for chamada
    saveUninitialized: false, //Força uma sessão "não inicializada" a ser salva
    cookie: { // quanto tempo ira durar
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOption);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views')); 
app.set('view engine', 'ejs'); 

app.use(middlewareGlobal);

app.use(routes);

app.on('ready', () =>{ 
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
})
