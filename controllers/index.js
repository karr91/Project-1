require("../config/db.connection");

module.exports = {
    photo: require("./photo_controllers"),
    comment: require("./comment_contollers"),
};