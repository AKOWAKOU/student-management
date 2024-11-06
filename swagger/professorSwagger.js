// swagger/professorSwagger.js
/**
 * @swagger
 * tags:
 *   name: Professors
 *   description: Management of professors
 */

/**
 * @swagger
 * /api/professors:
 *   post:
 *     summary: Create a new professor
 *     tags: [Professors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *                 description: Name of the professor
 *                 example: "John Doe"
 *               prenom:
 *                 type: string
 *                 description: First name of the professor
 *                 example: "John"
 *     responses:
 *       201:
 *         description: Professor created
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /api/professors:
 *   get:
 *     summary: Get all professors
 *     tags: [Professors]
 *     responses:
 *       200:
 *         description: List of professors
 */

/**
 * @swagger
 * /api/professors/{id}:
 *   get:
 *     summary: Get a professor by ID
 *     tags: [Professors]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the professor to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Professor details
 *       404:
 *         description: Professor not found
 */

/**
 * @swagger
 * /api/professors/{id}:
 *   put:
 *     summary: Update a professor by ID
 *     tags: [Professors]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the professor to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *               prenom:
 *                 type: string
 *     responses:
 *       200:
 *         description: Professor updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Professor not found
 */

/**
 * @swagger
 * /api/professors/{id}:
 *   delete:
 *     summary: Delete a professor by ID
 *     tags: [Professors]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the professor to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Professor deleted
 *       404:
 *         description: Professor not found
 */

/**
 * @swagger
 * /api/professors:
 *   get:
 *     summary: Obtenir tous les étudiants
 *     tags: [professors]
 *     responses:
 *       200:
 *         description: Liste des professeurs
 */
