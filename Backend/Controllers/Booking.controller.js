const BookingModal = require("../Modals/Booking.modal.js");
const UserModal = require("../Modals/User.modal.js");

exports.createBooking = async (req, res) => {
    const { hotelId, checkIn, checkOut, adults, children, name, email, contactInfo } = req.body;

    if (!hotelId || !checkIn || !checkOut || !adults || !children || !name || !email || !contactInfo) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
        return res.status(400).json({
            message: "Invalid check-in or check-out date format"
        });
    }

    const booking = await BookingModal.create({
        name,
        email,
        contactInfo,
        hotelId,
        checkIn: checkInDate,
        checkOut: checkOutDate,
        adults,
        children
    });

    res.status(201).json({
        success: "Booking created successfully",
        booking
    });
};

exports.getBookings = async (req, res) => {
    const user = req.user;

    if (user.role !== "admin") {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    const checkUser = await UserModal.findById(user._id);

    if (!checkUser) {
        return res.status(401).json({
            message: "Please login first"
        });
    }

    const bookings = await BookingModal.find();

    res.status(200).json({
        success: "Bookings fetched successfully",
        bookings
    });
};

exports.issueBooking = async (req, res) => {
    const user = req.user;
    const { roomNumber, ticketNumber } = req.body;

    if (user.role !== "admin") {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    if (!roomNumber || !ticketNumber) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const bookingId = req.params.id;
    const booking = await BookingModal.findById(bookingId);

    if (!booking) {
        return res.status(404).json({
            message: "Booking not found"
        });
    }

    booking.roomNumber = roomNumber;
    booking.ticketNumber = ticketNumber;

    await booking.save();

    res.status(200).json({
        success: "Booking updated successfully",
        booking
    });
};

exports.deleteBooking = async (req, res) => {
    const user = req.user;

    if (user.role !== "admin") {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    const bookingId = req.params.id;
    const booking = await BookingModal.findById(bookingId);

    if (!booking) {
        return res.status(404).json({
            message: "Booking not found"
        });
    }

    await BookingModal.findByIdAndDelete(bookingId);

    res.status(200).json({
        success: "Booking deleted successfully"
    });
};
