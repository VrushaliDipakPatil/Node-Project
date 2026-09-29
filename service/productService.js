const getProducts = () => {
    return "Fetching all products.";
}

const getProductById=(productId) => {
    return 'Fetching product with ID: ' + productId;
}

const createProduct=(productName) => {
    return 'Creating a new product: ' + productName;
};

module.exports = {
    getProducts,
    getProductById,
    createProduct
};