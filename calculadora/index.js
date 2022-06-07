const operacao = require('./operacoes');
// para receber as perguntas, preciso importar
const readline = require('readline-sync');
console.log('Fazendo as operações')
// depois da frase, eu quero que o usuário digite os números para fazer as operações. antes disso, preciso baixar o pacote, através do $npm install readline-sync
// para armazenar os números nas variáveis
const num1 = readline.questionInt("Digite um número: ")
// todos os operadores estarão visíveis para o usuário escolher.
const oper = readline.question("Digite a operação: (+, -, *, /");
const num2 = readline.questionInt("Digite um número: ");
switch(oper) {
  case "+":
    operacao.sun(num1, num2)
    break;
  case "-":
    operacao.sub(num1,num2)
    break;
  case "*":
    operacao.multi(num1,num2)
    break;
  case "/":
    operacao.div(num1,num2)
    break;
  default:
    console.log("Não foi possível fazer a operação")
}