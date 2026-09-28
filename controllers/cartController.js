const getCartItemsbyUserId=(req, res) => {
    const userId = parseInt(req.params.userId);
    res.send('Fetching cart items for user with ID: ' + userId);
}

const addProductToCart=(req, res) => {
    const userId = parseInt(req.params.userId);
    res.send('Adding product to cart for user with ID: ' + userId);
}

module.exports = {
    getCartItemsbyUserId,
    addProductToCart
};