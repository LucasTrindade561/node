exports.middlewareGlobal = (req, res, next) => {  
    // if(req.body.cliente){
    //     req.body.cliente = req.body.cliente.replace('Trindade', 'Nao use Trindade');
    //     console.log();
    //     console.log(`Vi que voce postou ${req.body.cliente}`);
    //     console.log();
    // }
    next();
}

exports.outroMiddleware = (req, res, next) => {  
    console.log('Sou seu outro middleware')
    next();
}