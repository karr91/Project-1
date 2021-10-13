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
router.get('/new', (req,res) => {
    res.render('new.ejs');
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
    return res.render('photos/show.ejs',context);
    } catch (error) {
        return console.log(error);
    }
});

// === Edit Route ===
router.get('/:photoId/edit', async(req,res) => {
    try{
        const photo = await Photo.findById(req.params.photoId);
        return res.render('photos/edit.ejs', {photo});
    } catch(error) {
        return console.log(error);
    }
});

// === Update photo ====
router.put('/:photoId', async (req,res) => {
    try {
        await Photo.findByIdAndUpdate(
        req.params.photoId,
        req.body,
        {new: true});
        res.redirect(`${req.params.photoId}`);
    
    } catch(error){
        console.log(error)
    }
});

// === Delete photo ===
router.delete('/:photoId', async(req,res) => {
    try {
        await Photo.findByIdAndDelete(req.params.photoId);
        return res.redirect('/photos');        
    } catch(error){
        console.log(error)
    }
});

module.exports = router