// npm init -y

// npm i mysql2      permite que o banco de dados se comunique com a aplicação

// npm i express body-parser

// npm i nodemon -D
// index.js

const express = require('express');

const app = express();

const PORT =3000;

const Author = require('./models/Author');

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
})

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});