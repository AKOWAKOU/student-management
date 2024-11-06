const express = require('express');
const connectDB = require('./config/db');
const helmet = require('helmet');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./config/swagger');
const studentRoutes = require('./routes/studentRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');
const filiereRoutes = require('./routes/filiereRoutes');
const matiereRoutes = require('./routes/matiereRoutes');
const professorRoutes = require('./routes/professorRoutes');
const courseRoutes = require('./routes/courseRoutes');
const fs = require('fs');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const path = require('path');
// Connect to MongoDB
connectDB();

// Middleware
app.use(helmet());
app.use(cors());  // Move this up to apply CORS to all routes
app.use(express.json());

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// const writeSwaggerToFile = (filename, data) => {
//   const dir = path.join(__dirname, 'SwaggerDocs'); 
//   if (!fs.existsSync(dir)) {
//     fs.mkdirSync(dir); 
//   }
//   fs.writeFileSync(path.join(dir, filename), JSON.stringify(data, null, 2), 'utf-8');
// };
// writeSwaggerToFile('studentSwagger.json', swaggerDocs.paths['/api/students']);
// writeSwaggerToFile('enrollmentSwagger.json', swaggerDocs.paths['/api/enrollments']);
// writeSwaggerToFile('filiereSwagger.json', swaggerDocs.paths['/api/filieres']);
// writeSwaggerToFile('matiereSwagger.json', swaggerDocs.paths['/api/matieres']);
// writeSwaggerToFile('professorSwagger.json', swaggerDocs.paths['/api/professors']);
// writeSwaggerToFile('courseSwagger.json', swaggerDocs.paths['/api/courses']);


app.use('/api/students', studentRoutes);
app.use('/api/enrollments', enrollmentRoutes);
app.use('/api/filieres', filiereRoutes);
app.use('/api/matieres', matiereRoutes);
app.use('/api/professors', professorRoutes);
app.use('/api/courses', courseRoutes);


const corsOption = {
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
};
app.use(cors(corsOption));  


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
