const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  description: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
    required: true,
    unique: true,
  },
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
