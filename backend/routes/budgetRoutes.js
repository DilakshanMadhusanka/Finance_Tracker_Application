const router = require('express').Router();
const { 
  createTransaction, 
  getTransactions, 
  updateTransaction, 
  deleteTransaction 
} = require('../controllers/transactionController');
const auth = require('../middleware/authMiddleware');

router.use(auth);

router.post('/', createTransaction);
router.get('/', getTransactions);
router.put('/:id', updateTransaction);
router.delete('/:id', deleteTransaction);

module.exports = router;

