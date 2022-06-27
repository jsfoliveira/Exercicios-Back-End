// npm init -y

// npm i mysql2      permite que o banco de dados se comunique com a aplicação

// npm i express body-parser

// npm i nodemon -D
// index.js

const express = require('express');

const app = express();

const PORT =3002;

const Book = require('./models/Book');

app.get('/book', async (req, res) => {
  const book = await Book.getAll();

  res.status(200).json(book);
})

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});