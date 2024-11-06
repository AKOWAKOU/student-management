const express = require('express');
const { 
  createCourse, 
  getAllCourses, 
  getCourseById, 
  updateCourse, 
  deleteCourse 
} = require('../controllers/courseController');

const router = express.Router();

// Routes pour la gestion des cours
router.post('/', createCourse); // Créer un cours
router.get('/', getAllCourses); // Lire tous les cours
router.get('/:id', getCourseById); // Lire un cours par ID
router.put('/:id', updateCourse); // Mettre à jour un cours
router.delete('/:id', deleteCourse); // Supprimer un cours

module.exports = router;
