// como utilizar promise em um fluxo assíncrono

// Sempre que precisarmos criar uma nova Promise, invocaremos o construtor através da palavra-chave new. Para esse construtor, devemos passar uma função chamada de executor, é essa função quem vai, de fato, tentar cumprir a promessa que estamos fazendo.
// A função executor recebe outras duas funções como parâmetros: resolve e reject.

function calcularDivisao(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if(num2 == 0) {
      reject(new Error ('Não pode dividir um número por zero'));
    } else {
      return resolve(num1 / num2);
    }
  })
  return promise;
}

// como a função retorna uma promise, deve-se tratar os erros com then e catch.
calcularDivisao(2,0)
    .then((result) => console.log(result))
    .catch(err => console.log(`erro: ${err.message}`));
