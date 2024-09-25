const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    contactInfo: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    resetLink: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);
