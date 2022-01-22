// Contralador = Com base nos dados, vai decidir qual view ou qual model iremos usar. É aonde feito o tratamento
exports.paginaInicial = (req, res, next) => {
    res.render('index');
    return;
};
    
exports.trataPost = (req, res) => {
    res.send(req.body)
}


// exports.paginaInicial = (req, res, next) => {
//     // console.log('Respondendo o cliente');
//     res.render('index');
//     // console.log(`'paginaIncial'Olha oq tem na req.session.nome: ${req.session.nome}`);
//     // next();
//     return;
// };
