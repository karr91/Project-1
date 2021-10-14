const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { Photo, Comment, User } = require("../models");

router.get("/register", (req, res) => {

    return res.render("auth/register");

});

router.get("/login", (req, res) => {
    res.render("auth/login");
});

router.post("/register", async (req, res) => {
    try {
      const foundUser = await User.exists({ username: req.body.username });
      if (foundUser) {
        return res.redirect("/login");
      }
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(req.body.password, salt);
      req.body.password = hash;
      const newUser = await User.create(req.body);
      return res.redirect("/login");
    } catch (error) {
      return console.log(error);
    }
});

router.post("/login", async (req,res) => {
  try {
    const foundUser = await User.findOne({username: req.body.username});
    console.log(foundUser);
    if (!foundUser) return res.redirect("/register");
    const match = await bcrypt.compare(req.body.password, foundUser.password);
    if(!match) return res.send("password invalid")
    req.session.currentUser = {
      id: foundUser._id,
      username: foundUser.username,
    };
    return res.redirect("/photos");
  } catch (error) {
    console.log(error);
  }
});

router.get("/logout", async (req,res) => {
  try {
    await req.session.destroy();
    return res.redirect("/photos");
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;