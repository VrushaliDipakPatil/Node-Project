const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/add', userController.addUser);
router.get('/', userController.fetchUsers);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;