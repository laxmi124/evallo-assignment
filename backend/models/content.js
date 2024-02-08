const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  title: String,
  description: String,
  mockFile: String,
});

module.exports = mongoose.model('Content', contentSchema);
