// Instalação do Express: $npm i express
const express = require('express');

// const cors = require('cors');

// Criar uma nova aplicação Express.
const app = express(); 

// app.use(cors());  

const recipes = [
  { id: 1, name: 'Pizza', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];
// Dizer ao Express que, quando uma requisição com método GET for recebida no caminho /recipes, a função deve ser chamada, com dois parâmetros req e res.
//  res.json quer dizer que é pra converter o recipes em JSON usando o método JSON.stringify().
app.get('/recipes', function(req, res) {
  res.json(recipes);
}); 

// app.get('/teste', function(req, res) {
//   res.send('enviou');
// }); 

// Aplicação ouvindo na porta 3001.
app.listen(3004, () => {
  console.log('Aplicação ouvindo na porta 3002');
}); 