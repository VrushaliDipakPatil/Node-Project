const getProducts=(req, res) => {
    res.send('Fetching all products.');
}

const getProductById=(req, res) => {
    const productId = parseInt(req.params.id);
    res.send('Fetching product with ID: ' + productId);
}

const createProduct=(req, res) => {
    res.send('Creating a new product.');
}

const updateProduct=(req, res) => {
    const productId = parseInt(req.params.id);
    res.send('Updating product with ID: ' + productId);
}

const deleteProduct=(req, res) => {
    const productId = parseInt(req.params.id);
    res.send('Deleting product with ID: ' + productId);
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};