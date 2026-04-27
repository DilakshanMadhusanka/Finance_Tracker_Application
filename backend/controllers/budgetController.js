const Budget = require("../models/Budget");

// Create a new budget
const createBudget = async (req, res) => {
  try {
    const { category, amount, month } = req.body;

    if (!category || !amount || !month) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const budget = new Budget({ 
      user: req.user,
      category, 
      amount, 
      month 
    });
    await budget.save();
    res.status(201).json(budget);

  } catch (error) {
    res.status(500).json({ message: 'Error creating budget' });
  }
};

// Get all budgets
const getBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find({ user: req.user });
    res.status(200).json(budgets);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching budgets' });
  }
};

// Update Budget
const updateBudget = async (req, res) => {
  try {
    const id = req.params.id;

    const budget = await Budget.findById(id);
    if (!budget || budget.user.toString() !== req.user) {
      return res.status(404).json({ message: 'Budget not found' });
    }

    const updatedBudget = await Budget.findByIdAndUpdate(
      id, 
      req.body, 
      { new: true }
    );
    
    res.status(200).json(updatedBudget);
  } catch (error) {
    res.status(500).json({ message: 'Error updating budget' });
  }
};

// Delete Budget
const deleteBudget = async (req, res) => {
  try {
    const id = req.params.id;

    const budget = await Budget.findById(id);
    if (!budget || budget.user.toString() !== req.user) {
      return res.status(404).json({ message: 'Budget not found' });
    }

    await Budget.findByIdAndDelete(id);
    res.status(200).json({ message: 'Budget deleted successfully' });

  } catch (error) {
    res.status(500).json({ message: 'Error deleting budget' });
  }
};

module.exports = {
  createBudget,
  getBudgets,
  updateBudget,
  deleteBudget
};