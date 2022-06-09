// O roteamento consiste em "direcionar" uma requisição para que seja atendida por uma determinada parte do sistema.

// No Express, uma rota é registrada utilizando a assinatura app.METODO(caminho, callback), onde a função de callback recebe três parâmetros: request, response e next.
// request: geralmente chamado de req, contém as informações enviadas pelo cliente ao servidor;
// response: geralmente chamado de res, permite o envio de informações do servidor de volta ao cliente;
// next: função que diz para o Express que aquela callback terminou de ser executada, e que ele deve prosseguir para executar a próxima callback para aquela rota. Este parâmetro é opcional e você entenderá melhor o uso do next em breve.

const express = require('express');
const app = express();

/* Rota com caminho '/', utilizando o método GET */
app.get('/', function (req, res) {
  res.send('Hello World!');
});

/* Rota com caminho '/', utilizando o método POST */
app.post('/', function (req, res) {
  res.send('Hello World!');
});

/* Rota com caminho '/', utilizando o método PUT */
app.put('/', function (req, res) {
  res.send('Hello World!');
});

/* Rota com caminho '/', utilizando o método DELETE */
app.delete('/', function (req, res) {
  res.send('Hello World!');
});

/* Rota com caminho '/' para qualquer método HTTP */
app.all('/', function (req, res) {
  res.send('Hello World!');
});

/* Ou podemos encadear as requisições para evitar repetir o caminho */
app
  .route('/')
  .get(function (req, res) {
		// Requisições para rota GET `/` são resolvidas aqui!
    res.send('Hello World! Get');
  })
  .post(function (req, res) {
		// Requisições para rota POST `/` são resolvidas aqui!
    res.send('Hello World! post');
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});