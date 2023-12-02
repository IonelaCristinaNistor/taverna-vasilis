const express = require('express');
const path = require('path');
const app = express();

// Setarea folderului pentru fișiere statice (CSS, imagini, etc.)
app.use(express.static('public'));

// Definirea unui obiect pentru a gestiona rutele și paginile
const pages = {
  home: 'index.astro',
  reservation: 'reservation.astro',
  contact: 'contact.astro',
  restaurant: 'restaurant.astro'
  // Adaugă aici alte rute și numele fișierelor corespunzătoare
};

// Definirea unei rute generice pentru paginile definite
app.get('/', (req, res) => {
  const indexPagePath = pages['home']; // 'home' este pagina de index

  if (indexPagePath) {
    res.sendFile(path.join(__dirname, 'src', 'pages', indexPagePath));
  }
});

// Alte rute și configurații...
navigator
// Pornirea serverului
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serverul rulează pe portul ${port}`);
});