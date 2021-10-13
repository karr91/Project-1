const express = require("express");
const router = express.Router();
const { Photo, Comment, User } = require("../models");

router.get("/register", (req, res) => {

    return res.render("auth/register");

});

router.get("/login", function (req, res) {
    res.render("auth/login");
});

module.exports = router;