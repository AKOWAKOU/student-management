const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  matiere: { type: mongoose.Schema.Types.ObjectId, ref: 'Matiere', required: true },
  filiere: { type: mongoose.Schema.Types.ObjectId, ref: 'Filiere', required: true },
  dateIns: { type: Date, required: true },
  annee: { type: Number, required: true },
});

module.exports = mongoose.model('Enrollment', enrollmentSchema);
