const fs = require('fs').promises;

module.exports = (caminhaArquivo, dados) =>{
//Para escrever numa pasta
                //caminho       //dados  
                                        //w = apagar tudo que estiver dentro desse arquivo e rescrever pelo os dados que tu mandou
                                        //a = vai escrever os dados no final do arquivo selecionado e nao ira apagar nada dele    
    fs.writeFile(caminhaArquivo, dados, {flag: 'w'});
};


