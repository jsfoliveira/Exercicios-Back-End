
// models/connection.js
// criar a conexão com o mysql

const mysql = require('mysql2/promise');

// createPool permite reaproveitar conexões e ganhar tempo
const connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '12060512@Ju',
	database: 'users_crud' });

module.exports = connection;