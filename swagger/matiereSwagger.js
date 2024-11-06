// swagger/matiereSwagger.js
/**
 * @swagger
 * tags:
 *   name: Matières
 *   description: Management of subjects
 */

/**
 * @swagger
 * /api/matieres:
 *   post:
 *     summary: Create a new subject
 *     tags: [Matières]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               libmat:
 *                 type: string
 *                 description: Name of the subject
 *                 example: "Mathematics"
 *               coef:
 *                 type: number
 *                 description: Coefficient
 *                 example: 3
 *     responses:
 *       201:
 *         description: Subject created
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /api/matieres:
 *   get:
 *     summary: Get all subjects
 *     tags: [Matières]
 *     responses:
 *       200:
 *         description: List of subjects
 */

/**
 * @swagger
 * /api/matieres/{id}:
 *   get:
 *     summary: Get a subject by ID
 *     tags: [Matières]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the subject to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Subject details
 *       404:
 *         description: Subject not found
 */

/**
 * @swagger
 * /api/matieres/{id}:
 *   put:
 *     summary: Update a subject by ID
 *     tags: [Matières]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the subject to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               libmat:
 *                 type: string
 *               coef:
 *                 type: number
 *     responses:
 *       200:
 *         description: Subject updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Subject not found
 */

/**
 * @swagger
 * /api/matieres/{id}:
 *   delete:
 *     summary: Delete a subject by ID
 *     tags: [Matières]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the subject to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Subject deleted
 *       404:
 *         description: Subject not found
 */

/**
 * @swagger
 * /api/matieres:
 *   get:
 *     summary: Obtenir tous les matieres
 *     tags: [matieres]
 *     responses:
 *       200:
 *         description: Liste des matieres
 */
