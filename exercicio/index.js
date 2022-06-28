// npm init -y
const express = require('express');
const app = express();
// npm i mysql2      permite que o banco de dados se comunique com a aplicação

// npm i express body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// npm i nodemon -D

// crie a porta
const PORT =3003;

const Users = require('./models/Users');

// 1 - Crie o endpoint POST /user;
// app.post('/user', async (res, req) => {
//   const user = await Users.getAll();
//   res.status(200).json(user);
// });

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});