const express = require('express');
const app = express(); //carregamos o express

app.use(express.urlencoded( // Aqui conseguiremos usar o body
    {
        extended:true 
    })) 

//         Criar   ler   atualizar  apagar
// CRUD -> CREATE, READ, UPDATE,    DELETE
//         POST    GET   PUT        DELETE 

// Express é responsavel por fazer a rota da nossa aplicacao
// /profiles/12345 = parametros ---> req.params
// ?campanha=googleads&nome_campanha=seila = queryStrings ---> req.query

app.get('/', (req, res) => {
    // name que vai ser usado para conserguirmos recuperar os dados do body
    // method = importante, pois saberemos se é post ou outra coisa, dependendo oq for usamos ela.
    res.send(`
    <form action="/" method="POST"> 
    Nome: <input type="text" name="nome"><br> 
    Sobrenome: <input type="text" name="sobrenome">
    <button>Enviar</button>
    `); 
});

app.get('/testes/:idUsuario?/:parametro?', (req, res) => { // ? = para falar que o paremetro idUsuario é opcional
    console.log(req.params); //req.params = Um objeto que pega os parametros da requisicao
    console.log(req.query) // req.query = Um objeto que pega as queryString da requisicao
    res.send(req.query.nome);
});

app.post('/', (req, res) =>{
    // req.body = que vem dentro do corpo da aplicacao, normalmente usado para senhas e id(coisas que não pode se vazar). Ele é usado principlamente por post e put
    console.log(req.body); 
    res.send(`O que voce me enviou foi: ${req.body.nome}`);
});

app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
