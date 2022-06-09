// Crie uma função que receba três parâmetros e retorna uma Promise.
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números".
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ((a + b) * c).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.
const fs = require('fs').promises;
function funcaoTreino (a,b,c) {
  const promise = new Promise((resolve, reject) => {
    if(typeof a !== 'number' || typeof b !==  'number'  || typeof c !== 'number') {
      reject(new Error ('Informe apenas números'));
    }
    const result = (a + b) * c;
    if (result < 50) {
      return reject(new Error('Valor muito baixo'));
    } else {
      return resolve(result);
    }
  })
  return promise;
}
// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
const fs = require('fs').promises;
function readAll (){
  const nomeDoArquivo = 'simpsons.json'
  fs.readFile(nomeDoArquivo, 'utf-8')
    .then((elementos) => {
    const simpsons = JSON.parse(fileContent);
    const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
    strings.forEach((string) => console.log(string));
  })
}


try {
  const data = fs.readFile(nomeDoArquivo, 'utf-8');
  console.log(`${id} - ${name}`);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}

// Extra: com `async/await` a função `readAll` ficaria assim:
async function readAllComAsyncAwait() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  // Mapear cada objeto do Array para uma string no formato correto.
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
  // Exibir as strings na tela.
  strings.forEach((string) => console.log(string)); 
}

// function main() {
  readAllComAsyncAwait();
// }


// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.

