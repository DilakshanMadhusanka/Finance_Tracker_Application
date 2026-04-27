const router = require("express").Router();
const { 
  createCategory, 
  getCategories,
  updateCategory,
  deleteCategory
} = require("../controllers/categoryController");
const auth = require("../middleware/authMiddleware");

router.use(auth);

router.post("/", createCategory);
router.get("/", getCategories);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;