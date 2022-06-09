// como utilizar promise em um fluxo síncrono
// throw new Error significa lançar novo erro, não precisa ter um return, é uma função que é usada para disparar um erro.

// erro personalizado
function calcularDivisao (num1, num2) {
  if(num2 == 0) {
    throw new Error('Não pode ser feita uma divisão por zero');
  } else {
    return  num1/num2;
  }
}

// tratando eventuais erros com try/catch. programador faz um código que pode trazer futuros bugs
// previne futuros bugs
// é dividido em 3 partes: Bloco TRY (onde fica o código passível de erro), Bloco CATCH (irá captar o erro caso aconteça dentro do TRY), Bloco FINALLY (sempre será executado, mas não é obrigatório)
// error é a variável que vai captar oobjeto de erro.
// error pode receber duas variáveis: error.name (Error) ou error.message (Não pode ser feita uma divisão por zero).
// ReferenceError
try {
  const calcular = calcularDivisao(2,0)
  console.log(`resultado: ${ calcular}`);
} catch (error) {
  console.log(`erro: ${error.message}`);
}

// SyntaxError
// o erro pode ser também de sintaxe, que é capturado com o eval
try {
  eval("alert('hello)");
} catch (error) {
  console.log(`erro: ${error.name}`);
}  // erro: SyntaxError

// TypeError
let num = 1;
try {
  num.toUppercase();
} catch (error) {
  console.log(`erro: ${error.name}`);
} // erro: TypeError