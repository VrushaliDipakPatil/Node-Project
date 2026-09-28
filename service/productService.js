const getProducts = () => {
    return "Fetching all products.";
}

const getProductById=(productId) => {
    return 'Fetching product with ID: ' + productId;
}

const createProduct=() => {
    return 'Creating a new product.';
};

module.exports = {
    getProducts,
    getProductById,
    createProduct
};