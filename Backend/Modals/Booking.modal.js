import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hotel",
        required: true
    },
    checkIn: {
        type: Date,
        required: true
    },
    checkOut: {
        type: Date,
        required: true
    },
    adults: {
        type: Number,
        required: true
    },
    children: {
        type: Number,
        required: true
    },
    roomNumber: {
        type: Number,
    },
    ticketNumber: {
        type: Number
    }
}, {
    timestamps: true
});

export default mongoose.model('Booking', bookingSchema)