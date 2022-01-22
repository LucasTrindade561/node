const express = require('express');
const app = express(); 
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({extended:true}));
app.set('views', path.resolve(__dirname, 'src', 'views')); //Caminho absoluto do view
app.set('view engine', 'ejs'); // Estamo fazendo isso, pois trataremos os dados dentro do view e sabemos que com html nao podemos fazer isso

app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
