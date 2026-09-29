const {sendErrorResponse, sendResponse} = require('../utils/response');

const getUser = (req, res,next) => {
    try {
        const user = req.params.id;
            if(!user){
                let error = new Error("User not found");
                error.statusCode = 404
throw error;
            }
                     return sendResponse(res, user, 200);
    } catch (error) {
        return sendErrorResponse(res, err);

    }

}

const getUserById = (req, res,next) => {
    const userId = parseInt(req.params.id);
    res.send('Fetching user with ID: ' + userId);
}

const createUser = (req, res) => {
    try {
    const{name, email}=req.body;
    if(!name || !email){
        let error = new Error("Name and email are required");
        error.statusCode = 400;
        throw error;
    }
    const user ={id:1, name, email};
    return sendResponse(res, user, 201);
    } catch (error) {
                return sendErrorResponse(res, err);

    }

}

module.exports = {
    getUser,
    getUserById,
    createUser
};
