const express = require('express');

const bookController = require('./controller/BookController');

const app = express();
const PORT = process.env.PORT || 3000;
// npm i express body-parser
app.use(express.json());

// app.use('/book', bookController);
app.get('/book', bookController.getAll);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));