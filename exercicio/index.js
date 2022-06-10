// $npm init -y
// $npm i express
// adiciona no package.json/ script: "start": "node index.js"
const express = require('express');
// instala $ npm i cors
const cors = require('cors');
// Criar uma nova aplicação Express.
const app = express(); 
// para requisição transformar em json: $ npm i body-parser
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());  

// 01 - Crie uma rota GET /ping. Sua rota deve retornar o seguinte JSON: { message: 'pong' }
app.get('/ping', function(req, res) {
  res.json({ message: 'pong' });
}); 

// 02 - Crie uma rota POST /hello. Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }. Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" }.
app.post('/hello', function(req, res) {
  const { name } = req.body;
  res.json({ "name": "<nome do usuário>" });
  res.send({ "message": "Hello, <nome do usuário>!" });
}); 






app.listen(3003, () => {
  console.log('Aplicação ouvindo na porta 3002');
}); 