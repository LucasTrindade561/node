const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

//Rotas da home          middlewares
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;



// function meuMiddlware(req, res, next){
//     req.session = {
//         nome: 'Lucas',
//         sobrenome: 'Trindade'
//     };
//     console.log();
//     console.log('Passei no seu middlware');
//     console.log();
//     next();


// route.get('/', meuMiddlware , homeController.paginaInicial, function(req, res, next){
//     console.log();
//     console.log('Ainda estou aqui...');
//     console.log(`'ultimoMiddlware'Olha oq tem na req.session.nome: ${req.session.nome}`);
// });
