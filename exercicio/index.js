const operacao = require('./operacoes');

const readline = require('readline-sync');
console.log('Vamos ver seu IMC?');

const peso = readline.questionInt('Digite seu peso: ');

const altura = readline.questionInt('Digite sua altura: ');

const resultado =  operacao.imc(peso, altura);