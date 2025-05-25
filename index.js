// index.js

const express = require('express');
const app = express();

// Puerto proporcionado por Azure o 3000 para desarrollo local
const port = process.env.PORT || 3000;

// Hostname de un servicio externo, configurable mediante variable de entorno
const API_HOSTNAME = process.env.API_HOSTNAME || 'http://localhost:3000';

app.get('/', (req, res) => {
  res.send('¡Hola desde Azure App Service!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});