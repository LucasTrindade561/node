// const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     titulo: '2 titulo teste.',
//     descricao: '2 descricao de teste.'
// })
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

// HomeModel.find()
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

exports.paginaInicial = (req, res, next) => {
    res.render('index');
    return;
};
    
exports.trataPost = (req, res) => {
    res.send(req.body)
}

