const productService = require('../service/productService');

const getProducts = (req, res) => {
    const products = productService.getProducts();
    res.send(products);
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