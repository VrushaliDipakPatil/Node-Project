const getUser = (req, res) => {
    res.send('Fetching all users.');
}

const getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    res.send('Fetching user with ID: ' + userId);
}

const createUser = (req, res) => {
    res.send('Creating a new user.');
}

module.exports = {
    getUser,
    getUserById,
    createUser
};
