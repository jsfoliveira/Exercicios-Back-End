// npm init -y

// npm i mysql2      permite que o banco de dados se comunique com a aplicação

// npm i express body-parser

// npm i nodemon -D
// index.js

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());

const PORT =3002;

const Book = require('./models/Book');

app.get('/book', async (req, res) => {
  const book = await Book.getAll();
  return res.status(200).json(book);
});

app.get('/book/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  } else {
    res.status(200).json(book);
  }
});

app.post('/books', async(req, res) => {
  const { title, author_id } = req.body;

  if (!Book.isValid(title, author_id)) {
    return res.status(400).json({ messsage: 'Dados inválidos '});
  }

  await Book.create(title, author_id);
  res.status(201).json({ message: 'Autor criado com sucesso!'});
})

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});