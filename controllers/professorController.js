const Professor = require('../models/Professor');

// Créer un professeur
exports.createProfessor = async (req, res) => {
  try {
    const professor = await Professor.create(req.body);
    res.status(201).json(professor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Lire tous les professeurs
exports.getAllProfessors = async (req, res) => {
  try {
    const professors = await Professor.find();
    res.status(200).json(professors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lire un professeur par ID
exports.getProfessorById = async (req, res) => {
  try {
    const professor = await Professor.findById(req.params.id);
    if (!professor) return res.status(404).json({ message: 'Professor not found' });
    res.status(200).json(professor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un professeur
exports.updateProfessor = async (req, res) => {
  try {
    const professor = await Professor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!professor) return res.status(404).json({ message: 'Professor not found' });
    res.status(200).json(professor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer un professeur
exports.deleteProfessor = async (req, res) => {
  try {
    const professor = await Professor.findByIdAndDelete(req.params.id);
    if (!professor) return res.status(404).json({ message: 'Professor not found' });
    res.status(200).json({ message: 'Professor deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
