const productRepository = require("../repository/productsRepo");
const gRPC = require("@grpc/grpc-js");

module.exports = async (call, callback) => {
  const productId = call.request.id;
  const selectedProduct = productRepository.getProductById(productId);

  if (selectedProduct) {
    return callback(null, selectedProduct);
  } else {
    callback({
      code: gRPC.status.NOT_FOUND,
      details: "O produto com o ID especificado não foi encontrado"
    })
  }
};
