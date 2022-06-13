// $npm init -y
// $npm i express
// adiciona no package.json/ script: "start": "node index.js"
const express = require('express');
const bodyParser = require('body-parser');
// // importar o arquivo dos simpsons
// const simpsonsUtils =  require('./fs-utils');
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
app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${name}!` });
});
// http POST :3003/hello name=ju

// 03 - Crie uma rota POST /greetings 
// Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> }.
// Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK.
// Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized.
app.post('/greetings', function(req, res){
  const { nome, idade } = req.body;
  if (Number(idade) <= 17){
    return  res.status(401).json({ "message": "Unauthorized" });
  } else {
    return res.status(200).json( { message: `Hello, ${nome}!` })
  }
})

// 04 - Crie uma rota PUT /users/:name/:age. 
// Sua rota deve retornar o seguinte JSON: { "message": "Seu nome é <name> e você tem <age> anos de idade" }.
// http://localhost:3003/users/juliana/34
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  return res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});


// 06 - Crie um endpoint GET /simpsons 
// O endpoint deve retornar um array com todos os simpsons.

const fs = require('fs');

function getSimpsons() {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
}

function setSimpsons(newSimpsons) {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}
app.get('/simpsons', async (req, res) => {
  try {
    const simpsons = await simpsonsUtils.getSimpsons();

    return res.status(200).json(simpsons);
  } catch (error) {
    return res.status(500).end();
  }
});







// http://localhost:3003/cars/update/0
// const carros = [{id: 0, name:'fiesta'}, {id:1, name:'saveiro'}];
// app.get('/cars/update/:id', (req, res) => {
//   // res.json(carros);
//  const { id } = req.params;
//   return res.json([carros[id]])

//   // const { name } = req.body;
//   // carros[id] = name;
//   // return res.json(carros[id]);
// });

// app.get('/cars/update/:id', (req, res) => {
//     res.json(carros);
// })

app.listen(3003, () => {
  console.log('Aplicação ouvindo na porta 3003');
}); 