// O módulo fs disponibiliza diversas funcionalidades úteis para acessar e interagir com o file system.
// Não há necessidade de intalá-lo. Sendo parte do núcleo do Node.js, basta importar para poder usá-lo:
// const fs = require('fs')

// Uma coisa peculiar sobre o módulo fs é que todos os métodos são assíncronos por padrão, mas eles também podem rodar de forma síncrona adicionando Sync no nome.
// Por exemplo:
// fs.rename()
// fs.renameSync()
// fs.write()
// fs.writeSync()

// O método disponibilizado pelo módulo fs para leitura síncrona de arquivos é o fs.readFileSync.
// Por ser síncrono, ele espera a leitura do arquivo terminar para, só então, atribuir o resultado à constante data.

// const fs = require('fs');
// const nomeDoArquivo = 'meu-arquivo.txt';

// try { 
//   // o segundo parâmetro é opcional
//   const data = fs.readFileSync(nomeDoArquivo, 'utf8'); 
//   console.log(data);
// } catch (err) {
//   console.error(`Erro ao ler o arquivo: ${err.path}`);
//   console.log(err);
// } //  Olá, eu sou Juliana Oliveira, dev backend.

// O método fornecido pelo módulo fs para leitura assíncrona de arquivos é o fs.readFile. Na versão padrão do fs, a função readFile aceita um callback, chamado quando a leitura do arquivo termina.
// fs.readFile aceita 3 parâmetros: o nome do arquivo, opcional, callback que permite receber e manipular o arquivo.
//  A callback é uma função que recebe dois parâmetros: err e data. Caso ocorra um erro durante a leitura do arquivo, o parâmetro err virá preenchido com as informações referentes ao erro. Quando esse parâmetro vier vazio, significa que a leitura do conteúdo do arquivo ocorreu sem problemas. Nesse caso, o segundo parâmetro, data, virá preenchido com o conteúdo do arquivo.

// const fs = require('fs');

// const nomeDoArquivo = 'meu-arquivo.txt';

// fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
//   if (err) {
//     console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
//     process.exit(1);
//   }
//   console.log(`Conteúdo do arquivo: ${data}`);
// });

// O módulo fs possui um segundo modelo de API que, em vez de trabalhar com callbacks, retorna Promises.
const fs = require('fs').promises;

const nomeDoArquivo = 'meu-arquivo.txt';

fs.readFile(nomeDoArquivo, 'utf8')
  .then((data) => {
    console.log(`Conteúdo do arquivo: ${data}`);
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
  });