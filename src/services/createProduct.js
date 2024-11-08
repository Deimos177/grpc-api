const productRepository = require("../repository/productsRepo");

module.exports = async (call, callback) => {
  const data = call.request;

  const nextId = await productRepository.getNextProductId();

  const newProductData = { ...data, id: nextId };

  productRepository.addProduct(newProductData);

  return callback(null, newProductData);
};