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

// === "Show" route for photos ===
router.get('/:id', async(req,res) => {
    try {
        const photo = await Photo.findById(req.params.id);
        const context = {
            photo
        };
    return res.render('/photos/show.ejs',context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

module.exports = router