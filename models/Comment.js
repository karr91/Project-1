const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: [true, 'comment cannot be empty'],
    },
    photo: {
        type: mongoose.Types.ObjectId,
        ref: "Photo"
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    }
    },
    {timestamps: true}
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;