const BookService = require('../services/BookService');

const getAll = async (req, res) => {
  const books = await BookService.getAll();
  res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } =  req.params;
  const book = await BookService.getById(id);

  if (!book) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json(book);
};

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const books = await BookService.create({ title, author, pageQuantity });

  return res.status(201).json(books);
};

const update= async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  const updated = await BookService.update(id, { title, author, pageQuantity });

  if (!updated) {
    return res.status(404).json({ message: 'Book not found' });
  }
  return res.status(201).json({ message: 'Book updated' });
};

const deleted= async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  const deletedBook = await BookService.deleted(id, { title, author, pageQuantity });

  if (!deletedBook) {
    return res.status(404).json({ message: 'Book not found' });
  }
  return res.status(200).json({ message: 'Book removed' });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleted,
};