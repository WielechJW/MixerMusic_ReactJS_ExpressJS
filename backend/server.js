const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors'); 

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Konfiguracja CORS
app.use(cors()); 

// Serwowanie statycznych plików muzycznych
app.use('/music', express.static(path.join(__dirname, 'music')));

const songs = [
  { id: 1, title: 'Song 1', artist: 'Artist 1', file: 'song1.mp3' },
  { id: 2, title: 'Song 2', artist: 'Artist 2', file: 'song2.mp3' },
  // Dodaj więcej utworów
];

app.get('/api/songs', (req, res) => {
  res.json(songs);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
