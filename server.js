// === External Modules === 
const express = require('express');

/ === Global Variables ===
const PORT = 4000;

// === Express Dependency ===
const app = express();

// === Configs === 
app.set('view engine', 'ejs');

// === Listener Listening ===
app.listen(PORT, () => console.log(`Listening for client requests on port ${PORT}`));