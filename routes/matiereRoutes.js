const express = require('express');
const { 
  createMatiere, 
  getAllMatieres, 
  getMatiereById, 
  updateMatiere, 
  deleteMatiere 
} = require('../controllers/matiereController');

const router = express.Router();

// Routes pour la gestion des matières
router.post('/', createMatiere); // Créer une matière
router.get('/', getAllMatieres); // Lire toutes les matières
router.get('/:id', getMatiereById); // Lire une matière par ID
router.put('/:id', updateMatiere); // Mettre à jour une matière
router.delete('/:id', deleteMatiere); // Supprimer une matière

module.exports = router;
