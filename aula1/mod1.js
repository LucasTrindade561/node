const nome = 'Lucas';
const sobrenome = 'Trindade';

const falaNome = () => nome+ ' '+ sobrenome;

class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}
 
// module é objeto usado pelo o node, onde podemos diversas coisas com ele
// exports, estamos jogando o nome para dentro desse objeto na chave exports
// module.exports.n = nome;
// module.exports.s = sobrenome;
// module.exports.fN = falaNome;

// module.exports = exports
// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;

// module.exports = exports = this
// this.qualquerCoisa = 'o this vai estar referenciando o module.export/exports aqui';

//Sobreescrevendo o exports
module.exports = {
    nome, sobrenome, Pessoa
};

// Nao ira funcionar, pois ali em cima ja esta sobreescrevendo
exports.algumaCoisa = 'Alguma coisa'

// console.log(module.exports);




