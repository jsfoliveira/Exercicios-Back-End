const connection = require('./connection');
// OUTRO FORMA
// const getAll = async () => {
// 	const [book] = await connection.execute(
// 	'SELECT id, title, author_id FROM model_example.books;'
//   );
//         return book;
//   };

  const getAll = async () => {
    const [book] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books;'
    );
          return book.map(({ id, title, author_id}) => ({
            id,
            title,
            author_id:author_id,
          }));
    };
  
module.exports = {
getAll,
 }; 