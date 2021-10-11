const express = require("express");
const router = express.Router();
const { Photo, Comment, User } = require("../models");

// === Index ===
router.get('/', async function (req, res) {
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

module.exports = router