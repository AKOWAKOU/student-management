const swaggerJsDoc = require('swagger-jsdoc');
const fs = require('fs');
const path = require('path');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'University API',
      version: '1.0.0',
      description: 'API pour la gestion des étudiants, des cours et des professeurs',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  // Spécifiez le chemin vers vos fichiers Swagger
  apis: [
    path.join(__dirname, '../swagger/matiereSwagger.js'),
    path.join(__dirname, '../swagger/professorSwagger.js'),
    path.join(__dirname, '../swagger/studentSwagger.js'),
    path.join(__dirname, '../swagger/filiereSwagger.js'),
    path.join(__dirname, '../swagger/courseSwagger.js'),
    path.join(__dirname, '../swagger/enrollmentSwagger.js')
  ],     
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;


module.exports = swaggerDocs;
