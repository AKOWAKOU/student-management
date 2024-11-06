// swagger/enrollmentSwagger.js
/**
 * @swagger
 * tags:
 *   name: Enrollments
 *   description: Management of enrollments
 */

/**
 * @swagger
 * /api/enrollments:
 *   post:
 *     summary: Create a new enrollment
 *     tags: [Enrollments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               studentId:
 *                 type: string
 *                 description: ID of the student
 *                 example: "603d7c2f0c4f5f1a6c98b933"
 *               courseId:
 *                 type: string
 *                 description: ID of the course
 *                 example: "603d7c2f0c4f5f1a6c98b934"
 *               dateInscription:
 *                 type: string
 *                 format: date
 *                 description: Enrollment date
 *                 example: "2024-11-04"
 *     responses:
 *       201:
 *         description: Enrollment created
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /api/enrollments:
 *   get:
 *     summary: Get all enrollments
 *     tags: [Enrollments]
 *     responses:
 *       200:
 *         description: List of enrollments
 */

/**
 * @swagger
 * /api/enrollments/{id}:
 *   get:
 *     summary: Get an enrollment by ID
 *     tags: [Enrollments]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the enrollment to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Enrollment details
 *       404:
 *         description: Enrollment not found
 */

/**
 * @swagger
 * /api/enrollments/{id}:
 *   put:
 *     summary: Update an enrollment by ID
 *     tags: [Enrollments]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the enrollment to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               studentId:
 *                 type: string
 *               courseId:
 *                 type: string
 *               dateInscription:
 *                 type: string
 *     responses:
 *       200:
 *         description: Enrollment updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Enrollment not found
 */

/**
 * @swagger
 * /api/enrollments/{id}:
 *   delete:
 *     summary: Delete an enrollment by ID
 *     tags: [Enrollments]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the enrollment to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Enrollment deleted
 *       404:
 *         description: Enrollment not found
 */

/**
 * @swagger
 * /api/enrollments:
 *   get:
 *     summary: Obtenir tous les enrollments
 *     tags: [enrollments]
 *     responses:
 *       200:
 *         description: Liste des enrollments
 */
