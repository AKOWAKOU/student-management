const express = require('express');
const { 
  createFiliere, 
  getAllFilieres, 
  getFiliereById, 
  updateFiliere, 
  deleteFiliere 
} = require('../controllers/filiereController');

const router = express.Router();

// Routes pour la gestion des filières
router.post('/', createFiliere); // Créer une filière
router.get('/', getAllFilieres); // Lire toutes les filières
router.get('/:id', getFiliereById); // Lire une filière par ID
router.put('/:id', updateFiliere); // Mettre à jour une filière
router.delete('/:id', deleteFiliere); // Supprimer une filière

module.exports = router;
