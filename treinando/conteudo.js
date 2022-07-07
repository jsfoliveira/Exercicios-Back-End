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

  // Uma migration é uma forma de versionar o schema do banco de dados.

  // O queryInterface é usado pela biblioteca para modificar o banco de dados, seguindo o "dialeto" do banco que estamos utilizando. O objeto Sequelize armazena os tipos de dados disponíveis no contexto do banco, por exemplo varchar, string, integer, date etc.

  // executar o migrate: npx sequelize db:migrate
  // reverter o migrate: npx sequelize db:migrate:undo

  // forma correta de adicionar uma nova coluna em uma tabela já existente é criando uma nova migration que permita alterar a tabela
  // npx sequelize migration:generate --name add-column-phone-table-users
  // modifica a função no migration
  // rodamos o comando abaixo para executar a nossa nova migration: npx sequelize db:migrate
  // vai no user.js e insere a informação da coluna criada

  // toda vez que executamos as migrations, nosso banco de dados é criado do zero, ou seja, sem dados dentro das tabelas. Os seeders existem pra resolver problemas como esse!podemos configurar nosso banco para ser automaticamente criado e povoado!
// vamos precisar executar a criação de um novo seed pelo CLI: npx sequelize seed:generate --name users
// altera o arquivo criado no seeders
// Para executar o seed, basta rodarmos o comando abaixo: npx sequelize db:seed:all
// Para reverter o seed, use o seguinte comando: npx sequelize db:seed:undo:all

// pra rodar, precisa modificar o pckagejson:
//     "start": "node index.js"
// e rodar : npm i express body-parser

// variáveis de ambiente
// servem para controlar coisas relacionadas à configuração geral da aplicação, usadas quando usamos credenciais, informações que não devem aparecer pra todos
// para isso, devemos fazer a instalação do pacote dotenv: npm install dotenv
// Mudaremos o nome do nosso arquivo config.json para config.js
// mudar todo o conteúdo do config.js
// Crie o arquivo .env na raiz e preencha
// Modifique a linha 8 do arquivo models/index.js para apontar para o arquivo config.js