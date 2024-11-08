const productRepository = require("../repository/productsRepo");
const gRPC = require("@grpc/grpc-js");

module.exports = async (call, callback) => {
  const productInfo = call.request;

  const message = productRepository.updateProduct(productInfo);
  if (message) {
    return callback(null, message);
  }

  return callback({
    code: gRPC.status.NOT_FOUND,
    details: "O produto com o id especificado não pode ser encontrado para atualizar.",
  });
};
