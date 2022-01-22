exports.middlewareGlobal = (req, res, next) => {  
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local'; // injetando
    next();
}

exports.outroMiddleware = (req, res, next) => {  
    console.log('Sou seu outro middleware')
    next();
}