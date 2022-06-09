// o HTTP hoje é responsável pelo tráfego de todo tipo de informação na internet. Boa parte do que é enviado e recebido via HTTP são requisições e respostas à APIs HTTP.

// Express é um framework Node.js criado para facilitar a criação de APIs HTTP com Node, definir rotas. Ele fornece uma série de recursos e abstrações que facilitam a vida na hora de decidir quais requisições tratar, como tratá-las, quais regras de negócio aplicar e afins.

// Instalação do Express: $npm i express
const express = require('express');
// Criar uma nova aplicação Express.
const app = express(); 
// Dizer ao Express que, quando uma requisição com método GET for recebida no caminho /hello, a função handleHelloWorldRequest deve ser chamada.



app.get('/hello', handleHelloWorldRequest); 
// Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3001.
// http://localhost:3001/recipes
app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3
// Ao tratar uma requisição com método GET no caminho /hello, enviar o status HTTP 200 que significa OK e a mensagem 'Hello World!'.
function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World!'); // 4
}