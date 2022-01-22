const e = require("connect-flash");

exports.middlewareGlobal = (req, res, next) => {  
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local'; // injetando
    next();
}

exports.outroMiddleware = (req, res, next) => {  
    console.log('Sou seu outro middleware')
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN'){ //checando se existe csrfToken
        return res.render('./includes/404');
    }
}

exports.csrfMiddleware = (req, res, next) => { 
    res.locals.csrfToken = req.csrfToken(); // recuperando o valor do token
    next();
}
