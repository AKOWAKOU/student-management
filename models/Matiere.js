const mongoose = require('mongoose');

const matiereSchema = new mongoose.Schema({
  libmat: { type: String, required: true },
  professor: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor', required: true },
});

module.exports = mongoose.model('Matiere', matiereSchema);
