const productService = require('../service/productService');
const path = require('path');

const getProducts = (req, res) => {
    const products = productService.getProducts();
    res.sendFile(path.join(__dirname, '../view/product.html'));
}


const getProductById=(req, res) => {
    const productId = parseInt(req.params.id);
    const result = productService.getProductById(productId);
    res.send(result);
}

const createProduct=(req, res) => {
    const result= productService.createProduct();
    res.send(result);
};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
};