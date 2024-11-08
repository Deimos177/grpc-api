const productRepository = require("../repository/productsRepo");

module.exports = async (call, callback) => {
  const productId = call.request.id;

  if (productRepository.deleteProduct(productId)) {
    return callback(null, { deleted: true });
  } else {
    return callback({
      code: gRPC.status.NOT_FOUND,
      details: "Produto não foi encontrado para exclusão.",
    });
  }
};
