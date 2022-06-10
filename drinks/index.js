const express = require('express');
const cors = require('cors');
const app = express(); 
app.use(express.json());
app.use(cors());  

const recipes = [
  { id: 1, name: 'Pizza', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];
app.get('/drinks', function(req, res) {
  res.json(drinks);
}); 

app.get('/recipes', function(req, res) {
  res.json(recipes);
}); 

// get retorna algo
app.get('/teste', function(req, res) {
  res.send('enviou');
}); 

// post pede algo
// app.post('/drinks', (req, res) => {
//   drinks.push(req.body);
//   res.json({ok:true})
// })

// NÃO CONSEGUI ENTENDER COMO FUNCIONA O POST
// REQUISIÇÃO DO POST
// $http POST :3001/recipes id:=4 name='Macarrão com Frango' price:=30
// app.post('/recipes', function (req, res) {
//   const { id, name, price } = req.body;
//   recipes.push({ id, name, price});
//   res.status(201).json({ message: 'Recipe created successfully!'});
// });

// quero adicionar outra receita. faço $http POST : 3002/recipes
// depois vejo se adicionou: $http GET : 3002/recipes
app.post('/recipes', function (req, res) {
  recipes.push(  { id: 4, name: 'Abobora', price: 42.0, waitTime: 32 });
  res.send('Abóbora adiciona com sucesso!');
});

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((r) => r.id === Number(id));
  res.json(drink);
});

// quando fizer essa busca no navegador, vai aparecer as receitas que tem name macarrão e o preço máximo: http://localhost:3002/recipes/search?name=Macarrão&maxPrice=40
// EU DEFINO O QUE QUERO FILTRAR NO LOCALHOST
app.get('/recipes/search', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < Number(maxPrice));
  res.status(200).json(filteredRecipes);
});


app.listen(3002, () => {
  console.log('Aplicação ouvindo na porta 3002');
}); 