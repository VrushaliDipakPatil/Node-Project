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


module.exports = {
    getProducts,
    getProductById,
    createProduct,
};