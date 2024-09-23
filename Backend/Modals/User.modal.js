import mongoose from "mongoose";

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

export default mongoose.model("User", userSchema)