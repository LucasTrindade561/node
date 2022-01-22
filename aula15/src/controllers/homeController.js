exports.paginaInicial = (req, res, next) => {
    console.log(req.flash('error'), req.flash('sucess'), req.flash('info'));
    res.render('index');
    return;
};
    
exports.trataPost = (req, res) => {
    res.send(req.body)
}

