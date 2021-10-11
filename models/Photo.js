const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'photo name cannot be empty'],
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        required : [true, 'image cannot be empty'],
    }
    // user: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "User",
    // },
});

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;