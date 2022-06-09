const express = require('express');
const cors = require('cors');
const app = express(); 
app.use(express.json());
app.use(cors());  
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

// get retorna algo
app.get('/teste', function(req, res) {
  res.send('enviou');
}); 

// post pede algo
// app.post('/drinks', (req, res) => {
//   drinks.push(req.body);
//   res.json({ok:true})
// })

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((r) => r.id === Number(id));
  res.json(drink);
});


app.listen(3002, () => {
  console.log('Aplicação ouvindo na porta 3002');
}); 