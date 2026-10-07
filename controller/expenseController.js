const Expenses = require("../models/expenses");

const addExpense = async (req, res) => {
  try {
    const { amount, description, category } = req.body;
    const expense = await Expenses.create({
      amount,
      description,
        category,
    });
    res.status(200).send({ message: "Expense added successfully", expense });
  } catch (error) {
    console.error("Error adding expense:", error);
    res.status(500).send({ message: "Error adding expense" });
  }
};

const fetchExpenses = async (req, res) => {
  try {
    const expenses = await Expenses.findAll();
    res.status(200).send(expenses);
  } catch (error) {
    console.error("Error fetching expenses:", error);
    res.status(500).send({ message: "Error fetching expenses" });
  }
};

const fetchExpenseById = async (req, res) => {
    try {
        const { id } = req.params;
        const expense = await Expenses.findByPk(id);
        if (!expense) {
            return res.status(404).send({ message: "Expense not found" });
        }
        res.status(200).send(expense);
    } catch (error) {
        console.error("Error fetching expense:", error);
        res.status(500).send({ message: "Error fetching expense" });
    }
};

const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount, description, category } = req.body;
    const expense = await Expenses.findByPk(id);
    if (!expense) {
      return res.status(404).send({ message: "Expense not found" });
    }
    await expense.update({ amount, description, category });
    res.status(200).send({ message: "Expense updated successfully", expense });
  } catch (error) {
    console.error("Error updating expense:", error);
    res.status(500).send({ message: "Error updating expense" });
  }
};

const deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const expense = await Expenses.findByPk(id);
        if (!expense) {
            return res.status(404).send({ message: "Expense not found" });
        }
        await expense.destroy();
        res.status(200).send({ message: "Expense deleted successfully" });
    }catch (error) {
        console.error("Error deleting expense:", error);
        res.status(500).send({ message: "Error deleting expense" });
    }
};

module.exports = {
  addExpense,
  fetchExpenses,
  fetchExpenseById,
  updateExpense,
  deleteExpense
};