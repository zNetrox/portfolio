const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Pour servir des fichiers statiques (HTML, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Route par défaut
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});