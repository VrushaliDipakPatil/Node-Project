const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/add', userController.addUser);
router.get('/', userController.fetchUsers);

module.exports = router;