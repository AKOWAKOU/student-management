// swagger/filiereSwagger.js
/**
 * @swagger
 * tags:
 *   name: Filières
 *   description: Management of fields
 */

/**
 * @swagger
 * /api/filieres:
 *   post:
 *     summary: Create a new field
 *     tags: [Filières]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               libfil:
 *                 type: string
 *                 description: Name of the field
 *                 example: "Computer Science"
 *     responses:
 *       201:
 *         description: Field created
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /api/filieres:
 *   get:
 *     summary: Get all fields
 *     tags: [Filières]
 *     responses:
 *       200:
 *         description: List of fields
 */

/**
 * @swagger
 * /api/filieres/{id}:
 *   get:
 *     summary: Get a field by ID
 *     tags: [Filières]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the field to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Field details
 *       404:
 *         description: Field not found
 */

/**
 * @swagger
 * /api/filieres/{id}:
 *   put:
 *     summary: Update a field by ID
 *     tags: [Filières]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the field to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               libfil:
 *                 type: string
 *     responses:
 *       200:
 *         description: Field updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Field not found
 */

/**
 * @swagger
 * /api/filieres/{id}:
 *   delete:
 *     summary: Delete a field by ID
 *     tags: [Filières]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the field to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Field deleted
 *       404:
 *         description: Field not found
 */

/**
 * @swagger
 * /api/filieres:
 *   get:
 *     summary: Obtenir tous les filieres
 *     tags: [filieres]
 *     responses:
 *       200:
 *         description: Liste des filieres
 */
