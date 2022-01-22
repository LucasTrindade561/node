const path = require('path');
const caminhaArquivo = path.resolve(__dirname, 'teste.json');

const escreve = require('./mod/escrever');
const ler = require('./mod/ler');

async function lerArquivo(caminho){
    const dados = await ler(caminho); //Aqui lemos o arquivo
    renderizaDados(dados);
}

function renderizaDados(dados){
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val.nome));
}

lerArquivo(caminhaArquivo);

// const pessoas = [
//     {nome: 'Lucas'},
//     {nome: 'Eduardo'},
//     {nome: 'Julia'},
//     {nome: 'Fernanda'},
//     {nome: 'Pedro'},
// ];
// const json = JSON.stringify(pessoas, '', 2);
// escreve(caminhaArquivo, json);
