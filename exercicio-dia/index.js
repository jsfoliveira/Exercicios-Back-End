const express = require('express');

const bookController = require('./controller/BookController');

const app = express();
const PORT = process.env.PORT || 3000;
// npm i express body-parser
app.use(express.json());

app.get('/book', bookController.getAll);

app.get('/book/:id', bookController.getById);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));