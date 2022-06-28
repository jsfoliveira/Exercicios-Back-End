const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12060512@Ju',
  database: 'model_example'});

module.exports = connection;