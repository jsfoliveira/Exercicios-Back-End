const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const secret = 'seusecrettoken';

const app = express();

app.use(bodyParser.json());

function verifyJWT(req, res,next){
  const token = req.headers['autorization'];
  try {
    const payload = jwt.verify(token, secret);
    req.userId = payload.userId;
  } catch (err) {
    return res.status(401).end();
  }
}

app.get('/', verifyJWT, (req, res) => {
  console.log((req.userId + 'fez uma chamada'));
  res.json({message: "Está funcionando!"});
});

app.get('/clients', (req, res) => {
  res.json({id: 1, nome: "carlos"});
});

app.post('/login', (req,res) => {
  if(req.body.user === "carlos" && req.body.password === '123') {
    const token = jwt.sign({userId: 1}, secret, { expiresIn: 300})
    return res.json({auth: true, token})
  };
  res.statusCode(401).end();
});


app.listen(3000, () => console.log('Aplicação funcionando na porta 3000'));