// Importamos la librería Express para crear el servidor y manejar rutas
const express = require('express');

// Importamos CORS para permitir peticiones desde el frontend que puede estar en otro origen
const cors = require('cors');

// Creamos la aplicación Express
const app = express();

// Puerto en el que correrá el servidor
const PORT = process.env.PORT || 3000;

// Middleware para permitir CORS y parsear JSON en el cuerpo de las peticiones
app.use(cors());
app.use(express.json());

// Ruta de prueba para verificar que el servidor está vivo
app.get('/', (req, res) => {
  res.json({ message: 'Servidor Express funcionando correctamente' });
});

// Iniciamos el servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
