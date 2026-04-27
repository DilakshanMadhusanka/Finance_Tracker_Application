const Category = require("../models/Category");

// Create a new category
const createCategory = async (req, res) => {
  try {
    const { name, type } = req.body;

    if (!name || !type) {
      return res.status(400).json({ message: "Name and type are required" });
    }

    const category = new Category({ 
      user: req.user, 
      name, 
      type 
    });

    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get Categories
const getCategories = async (req, res) => {
  try {
    const type = req.query;

    let filter = { user: req.user };
    if (type) {
      filter.type = type;
    }
    
    const categories = await Category.find(filter);
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

//Update Category
const updateCategory = async (req, res) => {
  try {
    const id = req.params.id;

    const category = await Category.findById(id);

    if (!category || category.user.toString() !== req.user) {
      return res.status(404).json({ message: "Category not found" });
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete Category
const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;

    const category = await Category.findById(id);

    if (!category || category.user.toString() !== req.user) {
      return res.status(404).json({ message: "Category not found" });
    }

    await Category.findByIdAndDelete(id);
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory
};