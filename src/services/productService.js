// Business Logic Layer

const productRepository = require("../repositories/productRepository");

exports.createProduct = async (data) => {
  // Business validations can go here
  return productRepository.createProduct(data);
};

exports.getAllProducts = async () => {
  return productRepository.getAllProducts();
};

exports.getProductById = async (id) => {
  return productRepository.getProductById(id);
};

exports.updateProduct = async (id, data) => {
  // Additional validations can go here
  return productRepository.updateProduct(id, data);
};

exports.deleteProduct = async (id) => {
  return productRepository.deleteProduct(id);
};