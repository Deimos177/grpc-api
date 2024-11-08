const gRPC = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const createProduct = require("./services/createProduct");
const readProduct = require("./services/readProduct");
const readProducts = require("./services/readProducts");
const updateProduct = require("./services/updateProduct");
const deleteProduct = require("./services/deleteProduct");
const productRepository = require("./repository/productsRepo");

const packageDef = protoLoader.loadSync("./protos/product.proto");

const gRPCObject = gRPC.loadPackageDefinition(packageDef);

const productProto = gRPCObject.product;
const productService = productProto.product.service;
const server = new gRPC.Server();

server.addService(productService, {
  createProduct: createProduct,
  readProduct: readProduct,
  readProducts: readProducts,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct,
});

server.bindAsync(
  "localhost:8081",
  gRPC.ServerCredentials.createInsecure(),
  () => {
    console.log("gRPC server running on localhost:8081");
  }
);
