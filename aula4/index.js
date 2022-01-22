const fs = require('fs').promises; //Para mexer com as pastas 
const path = require('path'); //Para mexer com os caminhos

async function readdir(rootDir){//listando os diretorios e os arquivos dessa pasta
    rootDir = rootDir || path.resolve(__dirname); 
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file); //Estaremos vendo todos os arquivos
        const stats = await fs.stat(fileFullPath);

        if(/\.git/g.test(fileFullPath)) continue;
        if(/node_modules/g.test(fileFullPath)) continue;
        
        if(stats.isDirectory()) {
           readdir(fileFullPath);
           continue;
        }

        if(
            !/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)) 
            continue;

        console.log(fileFullPath);
    }
}

readdir('C:/CURSOJS');
