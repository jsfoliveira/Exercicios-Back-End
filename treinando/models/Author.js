// models/Author.js
// vai retornar a lista de todos os autores
const connection = require('./connection');

// execute executa  a query
const getAll = async () => {
	const [authors] = await connection.execute(
		'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
	);
	return authors;
};

module.exports = {
	getAll,
};