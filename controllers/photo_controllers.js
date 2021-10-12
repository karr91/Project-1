const express = require("express");
const router = express.Router();
const { Photo, Comment, User } = require("../models");

// === Index ===
router.get('/', async (req, res) => {
    try {
        const photos = await Photo.find({});
        const context = {
            photos,
        }
        res.render('photos/index', context);
    } catch (error) {
        return console.log(error);
    }
});

// === New photo route ====
router.get('/newphoto', (req,res) => {
    res.render('/photos/new.ejs');
});

// === Post route for new photos ===
router.post('/', async(req,res) => {
    try {
        await Photo.create(req.body);
        return res.redirect('/photos');
    } catch(error){
        return console.log(error);
    }
});

module.exports = router