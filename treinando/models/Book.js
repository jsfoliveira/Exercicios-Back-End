const connection = require('./connection');
// OUTRO FORMA
// const getAll = async () => {
// 	const [book] = await connection.execute(
// 	'SELECT id, title, author_id FROM model_example.books;'
//   );
//         return book;
//   };



  const getAll = async ({authorId}) => {
    const query = 'SELECT id, title, author_id FROM model_example.books;'
    const [book] = await connection.execute(
    query,
    );
    return book.map(({ id, title, author_id }) => ({
      id,
      title,
      authorId: author_id,
    }));
    };

    const findById = async (id) => {
      const query = 'SELECT id, title, author_id FROM model_example.books WHERE id=?';
    const [book] = await connection.execute(
    query, [id]);
// se passar um id que não existe, vai ser um array vazio, vai retornar null
    if (book.length === 0){
      return null;
    } else {
      return book.map(({ id, title, author_id }) => ({
        id,
        title,
        authorId: author_id,
      }))[0];
    }

    }
  
module.exports = {
getAll,
findById,
 }; 