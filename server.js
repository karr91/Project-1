// === External Modules === 
const express = require('express');
require('./config/db.connection');

// === Global Variables ===
const PORT = 4000;

// === Express Dependency ===
const app = express();

// === Configs === 
app.set('view engine', 'ejs');

// === Routes ===

// === 404 ===
app.get("/*", (req, res) => {
    const context = { error: req.error };
    return res.status(404).render("404.ejs", context);
});

// === Listener Listening ===
app.listen(PORT, () => console.log(`Listening for client requests on port ${PORT}`));