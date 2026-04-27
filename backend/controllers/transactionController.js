const Transaction = require('../models/Transaction');

// Create a new transaction
const createTransaction = async (req, res) => {
  try {
    const { title, amount, category, type, date, note } = req.body;

  if (!title || !amount || !category || !type || !date) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const transaction = new Transaction({
    user: req.user,
    title,
    amount,
    category,
    type,
    date,
    note
  });

  await transaction.save();
  res.status(201).json({ message: 'Transaction created successfully' });

  } catch (error) {
    res.status(500).json({ message: 'Error creating transaction' });
  }
};

// Get all transactions for the authenticated user
const getTransactions = async (req, res) => {
  try {
    const {
      type,
      category,
      startDate,
      endDate,
      search,
      page = 1,
      limit = 10
    } = req.query;

    let filter = { user: req.user };

    if (type) filter.type = type;
    if (category) filter.category = category;

    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }

    if (search) {
      filter.title = { $regex: search, $options: 'i' };
    }

    const transactions = await Transaction.find(filter)
      .sort({ date: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Transaction.countDocuments(filter);

    res.json({ 
      data: transactions, 
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit) 
    });

  } catch (error) {
    res.status(500).json({ message: 'Error fetching transactions' });
  }
};

// Update a transaction
const updateTransaction = async (req, res) => {
  try {
    const id = req.params.id;
    const transaction = await Transaction.findById(id);

    if (!transaction || transaction.user.toString() !== req.user) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    const updated = await Transaction.findByIdAndUpdate(id, req.body, { new: true });

    res.json({ message: 'Transaction updated successfully', transaction: updated });

  } catch (error) {
    res.status(500).json({ message: 'Error updating transaction' });
  }
};

// Delete a transaction
const deleteTransaction = async (req, res) => {
  try {
    const id = req.params.id;
    const transaction = await Transaction.findById(id);

    if (!transaction || transaction.user.toString() !== req.user) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    await Transaction.findByIdAndDelete(id);
    res.json({ message: 'Transaction deleted successfully' });

  } catch (error) {
    res.status(500).json({ message: 'Error deleting transaction' });
  }
};

module.exports = {
  createTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction
};