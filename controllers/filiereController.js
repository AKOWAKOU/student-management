const Filiere = require('../models/Filiere');

// Créer une filière
exports.createFiliere = async (req, res) => {
  try {
    const filiere = await Filiere.create(req.body);
    res.status(201).json(filiere);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Lire toutes les filières
exports.getAllFilieres = async (req, res) => {
  try {
    const filieres = await Filiere.find();
    res.status(200).json(filieres);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lire une filière par ID
exports.getFiliereById = async (req, res) => {
  try {
    const filiere = await Filiere.findById(req.params.id);
    if (!filiere) return res.status(404).json({ message: 'Filière not found' });
    res.status(200).json(filiere);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour une filière
exports.updateFiliere = async (req, res) => {
  try {
    const filiere = await Filiere.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!filiere) return res.status(404).json({ message: 'Filière not found' });
    res.status(200).json(filiere);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer une filière
exports.deleteFiliere = async (req, res) => {
  try {
    const filiere = await Filiere.findByIdAndDelete(req.params.id);
    if (!filiere) return res.status(404).json({ message: 'Filière not found' });
    res.status(200).json({ message: 'Filière deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
