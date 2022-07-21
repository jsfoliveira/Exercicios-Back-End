const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const secret = 'seusecrettoken';

const app = express();

app.use(bodyParser.json());

const LoginControler = require('./controller/LoginController');
const ClienteControler = require('./controller/ClienteController');


app.get('/', (req, res) => {
  res.json({message: "Está funcionando!"});
});


app.get('/cliente', ClienteControler.ClienteControler);
app.post('/login', LoginControler.LoginControler);


app.listen(3000, () => console.log('Aplicação funcionando na porta 3000'));