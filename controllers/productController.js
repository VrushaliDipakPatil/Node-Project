const productService = require("../service/productService");
const path = require("path");
const { sendErrorResponse, sendResponse } = require("../utils/response");

const getProducts = (req, res) => {
  try {
    const products = productService.getProducts();
    res.sendFile(path.join(__dirname, "../view/product.html"));
    if (!products) {
      let error = new Error("Products not found");
      error.statusCode = 404;
      throw error;
    }
    sendResponse(res, products, 200);
  } catch (error) {
    return sendErrorResponse(res, error);
  }
};

const getProductById = (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const result = productService.getProductById(productId);
    if (!result) {
      let error = new Error("Product not found");
      error.statusCode = 404;
      throw error;
    }
    sendResponse(res, result, 200);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
const createProduct = (req, res) => {
  try {
    const productName = req.body.productName;
    const result = productService.createProduct(productName);
    res.json({ value: result });
    if (!result) {
      let error = new Error("Product creation failed");
      error.statusCode = 400;
      throw error;
    }
    sendResponse(res, result, 201);
  } catch (error) {
    return sendErrorResponse(res, error);
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
};
