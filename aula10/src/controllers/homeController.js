// Contralador = Com base nos dados, vai decidir qual view ou qual model iremos usar. É aonde feito o tratamento
exports.paginaInicial = (req, res) => {
    res.render('index');
};
    
exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de Post.')
}


