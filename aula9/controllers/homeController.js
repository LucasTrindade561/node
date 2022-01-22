// Contralador = Com base nos dados, vai decidir qual view ou qual model iremos usar. É aonde feito o tratamento
exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST"> 
    Nome: <input type="text" name="nome"><br> 
    Sobrenome: <input type="text" name="sobrenome">
    <button>Enviar</button>
    `)
};
    
exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de Post.')
}


