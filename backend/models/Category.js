const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  name: String,
  type: {
    type: String,
    enum: ["income", "expense"]
  }
}, { timestamps: true });

module.exports = mongoose.model("Category", categorySchema);