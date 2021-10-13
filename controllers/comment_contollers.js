const express = require("express");
const router = express.Router();
const { Photo, Comment, User } = require("../models");

router.post('/', async (req, res) => {
    try {
        const comment = await Comment.create(req.body);
    } catch(error) {
        return console.log(error);
    }
});

module.exports = router