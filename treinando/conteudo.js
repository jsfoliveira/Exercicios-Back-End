// npm init -y

// npm install sequelize

// instalar um CLI, que é responsável por gerar e executar as operações.
// npm install sequelize-cli

//  instalar o mysql2, uma dependência necessária para usarmos o MySQL juntamente com o Sequelize.
// npm install mysql2

// precisamos iniciar um projeto com o Sequelize
// npx sequelize-cli init

// alterar o config/config.json
// {
  // "development": {
  //   "username": "root",
  //   "password": "",
  //   "database": "orm_example",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // }

  // Criação do banco de dados usando o CLI do Sequelize
  // Agora que iniciamos uma aplicação do Sequelize, podemos criar o banco de dados orm_example (que nomeamos no arquivo config.json) através deste comando: npx sequelize db:create

  // No seu terminal, o Sequelize vai avisar que o database foi criado. Você pode verificar isso no próprio MySQL utilizando os comandos abaixo:mysql -u root -p

  // Digite a sua senha de acesso ao mysql e em seguida rode o comando abaixo: show databases;

  // Perceba que, a partir desses passos, o banco orm_example foi criado