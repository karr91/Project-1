const express = require("express");
const router = express.Router();
const { Photo, Comment, User } = require("../models");

router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        const comment = await Comment.create(req.body);
        console.log(comment);
        res.redirect(`/photos/${req.body.photo}`)
    } catch(error) {
        return console.log(error);
    }
});

module.exports = router