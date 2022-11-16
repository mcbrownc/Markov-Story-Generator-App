const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
});

module.exports = mongoose.model('story', studentSchema);