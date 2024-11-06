const mongoose = require('mongoose');

const filiereSchema = new mongoose.Schema({
  libfil: { type: String, required: true },
  matieres: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Matiere' }],
});

module.exports = mongoose.model('Filiere', filiereSchema);
