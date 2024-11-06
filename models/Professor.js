const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
  libprof: { type: String, required: true },
});

module.exports = mongoose.model('Professor', professorSchema);
