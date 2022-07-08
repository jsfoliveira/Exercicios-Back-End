const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

const create = async ({ title, author, pageQuantity }) => {
  const result = await Book.create({ title, author, pageQuantity });
  return result;
};

const update = async (id, { title, author, pageQuantity }) => {
  const [updated] = await Book.update(
    { 
      title, 
      author, 
      pageQuantity, 
    }, 
    { where: { id } },
  );

  return updated;
};

const deleted = async (id) => {
  const deletedBook = await Book.destroy(
    { where: { id } },
  );

  return deletedBook;
};


module.exports = {
  getAll,
  getById,
  create,
  update,
  deleted,
};