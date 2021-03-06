const mongoose = require("mongoose");
const ChallengeSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        minlength: 5,
        maxlength: 55,
        required: true
    },
    difficulty: {
        type: String,
        minlength: 3,
        maxlength: 15,
        required: true
    },
    prompt: {
        type: String,
        required: true,
        unique: true,
        minlength: 7,
        maxlength: 500
    }
});

module.exports = mongoose.model("Challenge", ChallengeSchema);
