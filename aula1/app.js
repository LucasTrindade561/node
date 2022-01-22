// // Para importar o modulo, usamos require
const mod1 = require('./mod1');

// const falaNomeDireto = require('./mod1').fN; 
// const falaNomeByMod = mod1.falaNome(); 

// // Por via desestruturação
// const {nome, sobrenome, falaNome} = require('./mod1');

// Aqui mostra que podemos instalar um negocio e ja importar sem o caminho completo dele.
const path = require('path');
const axios = require('axios');

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    // .then(response => console.log(response.data))
    // .catch(e => console.log(e));

// Aqui estamos importando a classe por via desestruturacao e tbm mostrando que se quiseremos podemos tirar apenas um negocio por vez.
const { Pessoa } = require('./mod1');
const p1 = new Pessoa('Lucas');

console.log(mod1);