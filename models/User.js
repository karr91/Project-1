const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'name cannot be empty'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'you must enter a password']
    }
});

const User = mongoose.model("User", userSchema);


module.exports = User;