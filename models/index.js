require("../config/db.connection");

module.exports = {
    User: require("./User"),
    Photo: require("./Photo"),
    Comment: require("./Comment")
};