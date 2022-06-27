const productModel = require('../models/Products');

const listAll = (res, req) => {
  try {
    const data = productModel.getAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({message: "Deu erro!"})
  }
};

module.exports = {
  listAll,
}