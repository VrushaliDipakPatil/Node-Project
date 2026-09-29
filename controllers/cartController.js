const {sendErrorResponse, sendResponse} = require('../utils/response');

const getCartItemsbyUserId=(req, res) => {
try{    
    const userId = parseInt(req.params.userId);
    res.send('Fetching cart items for user with ID: ' + userId);
    if(!userId){
        let error = new Error("User not found");
        error.statusCode = 404;
        throw error;
    }
    sendResponse(res, userId, 200);
}catch (error) {
    return sendErrorResponse(res, error);
}
};

const addProductToCart=(req, res) => {
    const userId = parseInt(req.params.userId);
    res.send('Adding product to cart for user with ID: ' + userId);
}

module.exports = {
    getCartItemsbyUserId,
    addProductToCart
};