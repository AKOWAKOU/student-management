const express = require('express');
const { 
  createProfessor, 
  getAllProfessors, 
  getProfessorById, 
  updateProfessor, 
  deleteProfessor 
} = require('../controllers/professorController');

const router = express.Router();

// Routes pour la gestion des professeurs
router.post('/', createProfessor); // Créer un professeur
router.get('/', getAllProfessors); // Lire tous les professeurs
router.get('/:id', getProfessorById); // Lire un professeur par ID
router.put('/:id', updateProfessor); // Mettre à jour un professeur
router.delete('/:id', deleteProfessor); // Supprimer un professeur

module.exports = router;
