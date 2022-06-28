const connection = require('./connection');

const data = require('../data/user.json');

// primeiro precisa formatar a chave, que está firstName, mas precisa ficar first_name.
const formatar = ({ id, first_name: firstName, last_name: lastName, email }) => {
  return {
    id,
    firstName,
    lastName,
    email
  }
};

function create({ firstName, lastName, email, password }) {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)';
  // Ao invés de chamarmos connection como uma function, agora utilizamos diretamente o método `execute`
  return connection.execute(query, [firstName, lastName, email, password])
  // Obtemos o resultado da inserção e o utilizamos para obter o ID recém inserido
  .then(([result]) => ({ id: result.insertId, firstName, lastName, email }));
  }


module.exports = {
  formatar,
  create,
};