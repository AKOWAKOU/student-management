const express = require('express');
const studentController = require('../controllers/studentController');
const { validateStudent } = require('../middleware/validate');
const router = express.Router();

router.post('/', validateStudent, studentController.createStudent);
router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudentById);
router.put('/:id', validateStudent, studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
