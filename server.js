// === External Modules === 
const express = require('express');
const methodOverride = require('method-override');
const session = require("express-session");
const MongoStore = require("connect-mongo");
require('./config/db.connection');

// === Global Variables ===
const PORT = 4000;
const controllers = require("./controllers");

// === Express Dependency ===
const app = express();

// === Configs === 
app.set('view engine', 'ejs');

// === Middleware ===
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(
    session({
      store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
      secret: "super secret",
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 * 2,
      },
    })
);

app.use(function (req, res, next) {
  res.locals.user = req.session.currentUser;
  next();
});

/* == logger == */
app.use((req, res, next) => {    
    console.log(`[${req.url}] ${req.method} - ${new Date().toLocaleTimeString()}`);
	next();
});

// === Controllers ===
app.use("/photos", controllers.photo);
app.use("/comments", controllers.comment);
app.use("/", controllers.auth);

// === Routes ===
app.get('/', function (req, res) {
    res.redirect('/photos');
});

// === 404 ===
app.get("/*", (req, res) => {
    const context = { error: req.error };
    return res.status(404).render("404.ejs", context);
});

// === Listener Listening ===
app.listen(PORT, () => console.log(`Listening for client requests on port ${PORT}`));