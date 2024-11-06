const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hrdeb: { type: String, required: true },
  hrfin: { type: String, required: true },
  filiere: { type: mongoose.Schema.Types.ObjectId, ref: 'Filiere', required: true },
});

module.exports = mongoose.model('Course', courseSchema);
