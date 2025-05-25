// index.js
console.log('¡Hola, mundo desde Node.js!');

const http = require('http');
const express = require('express');
const app = express();


const hostname = '127.0.0.1'; // localhost
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('¡Hola desde mi servidor Node.js!\n');
});

app.get('/get-node', (req, res) => {
  res.send('¡Hola, probando la aplicación node js!');
});

app.listen(port, () => {
  console.log(`Servidor Express corriendo en http://localhost:${port}`);
});

/*server.listen(port, hostname, () => {
  console.log(`El servidor está corriendo en http://${hostname}:${port}/`);
});*/