// swagger/studentSwagger.js
/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Management of students
 */

/**
 * @swagger
 * /api/students:
 *   post:
 *     summary: Create a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numInscription:
 *                 type: string
 *                 description: Student registration number
 *                 example: "2023-0001"
 *               nom:
 *                 type: string
 *                 description: Name of the student
 *                 example: "Alice"
 *               prenom:
 *                 type: string
 *                 description: First name of the student
 *                 example: "Smith"
 *     responses:
 *       201:
 *         description: Student created
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /api/students:
 *   get:
 *     summary: Get all students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: List of students
 */

/**
 * @swagger
 * /api/students/{id}:
 *   get:
 *     summary: Get a student by ID
 *     tags: [Students]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the student to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Student details
 *       404:
 *         description: Student not found
 */

/**
 * @swagger
 * /api/students/{id}:
 *   put:
 *     summary: Update a student by ID
 *     tags: [Students]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the student to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numInscription:
 *                 type: string
 *               nom:
 *                 type: string
 *               prenom:
 *                 type: string
 *     responses:
 *       200:
 *         description: Student updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Student not found
 */

/**
 * @swagger
 * /api/students/{id}:
 *   delete:
 *     summary: Delete a student by ID
 *     tags: [Students]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the student to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Student deleted
 *       404:
 *         description: Student not found
 */

/**
 * @swagger
 * /api/students:
 *   get:
 *     summary: Obtenir tous les étudiants
 *     tags: [Étudiants]
 *     responses:
 *       200:
 *         description: Liste des étudiants
 */
