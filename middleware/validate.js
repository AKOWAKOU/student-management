const { check, validationResult } = require('express-validator');

exports.validateStudent = [
  check('name').isString().withMessage('Name must be a string'),
  check('email').isEmail().withMessage('Invalid email format'),
  check('sexe').isIn(['M', 'F']).withMessage('Sexe must be M or F'),
  check('age').isInt({ min: 18 }).withMessage('Age must be at least 18'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
