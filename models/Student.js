const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  sexe: { type: String, enum: ['M', 'F'], required: true },
  age: { type: Number, required: true, min: 18 },
});

module.exports = mongoose.model('Student', studentSchema);
