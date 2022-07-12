// npm i express
// altera no package.json o script pra dar start na aplicação
// importa o express e body-parser
// cria a aplicação express
// fazer uma rota / pra testar se está funcionando a aplicação
// criar as rotas
// colocar o servidor para ouvir a porta que irá rodar
// dá npm start pra testar
// npm i jsonwebtoken
// importar o jwt no index.js
// definir o segredo pra gerar a assinatura digital(secret)
// criar uma rota login tipo post

// no postman
// colocar o localhost e post
// no Headers, coloca no key: Content-type; no value: application/json
// no body(raw), coloca {"user": "carlos","password": "123"}
// vai gerar um token e auth(autorização): true

// cria função se a requisição falhar

// testar se o token que foi criado anteriormente é de qual cliente:
// localhost:3000/clients com get
// no Headers, key: Authorization; value: token copiado anteriormente