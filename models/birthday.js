const mongoose = require('mongoose');

const birthdaySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: Date,
    required: true,
  },
});

const Birthday = mongoose.model('Birthday', birthdaySchema);
module.exports = Birthday;
