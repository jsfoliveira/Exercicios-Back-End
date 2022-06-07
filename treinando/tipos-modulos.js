// Módulos locais
// require('./meuModulo') não precisa botar .js ou .json, pois o node considera arquivos com essas extensões como módulos.
// meuModulo/funcionalidade-1.js

module.exports = function () {
  console.log('funcionalidade1');
}
// meuModulo/funcionalidade-2.js

module.exports = function () {
  console.log('funcionalidade2');
}
// meuModulo/index.js
const funcionalidade1 = require('./funcionalidade-1');
const funcionalidade2 = require('./funcionalidade-2');

module.exports = { funcionalidade1, funcionalidade2 };
// minha-aplicacao/index.js
const meuModulo = require('./meuModulo');

console.log(meuModulo); // { funcionalidade1: [Function: funcionalidade1], funcionalidade2: [Function: funcionalidade2] }

meuModulo.funcionalidade1();
// Nos módulo interno devemos passar o nome do pacote como parâmetro para a função require. Por exemplo, require('fs') importa o pacote fs, responsável pelo sistema de arquivos.
const fs = require('fs');

fs.readFileSync('./meuArquivo.txt');