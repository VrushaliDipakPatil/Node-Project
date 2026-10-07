const express = require('express');
const router = express.Router();
const expenseController = require('../controller/expenseController');

router.post('/add', expenseController.addExpense);
router.get('/', expenseController.fetchExpenses);
router.put('/:id', expenseController.updateExpense);
router.delete('/:id', expenseController.deleteExpense);