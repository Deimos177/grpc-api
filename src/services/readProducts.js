const productRepository = require("../repository/productsRepo");

module.exports = async (call, callback) => {

  let products = productRepository.getProducts()

  return callback(null, {products})
}