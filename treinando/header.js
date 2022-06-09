// Imagine que você precisa ter uma rota que recebe um token para ser validada, a regra da validação é checar se o token possui 16 caracteres:
app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'})';

  res.status(200).json({message: 'Valid Token!'})'
});

http :3001/validateToken Authorization:abc # vai devolver token inválido
http :3001/validateToken Authorization:S6xEzQUTypw4aj5A # vai devolver token válido