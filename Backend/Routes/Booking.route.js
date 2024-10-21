const express = require("express");
const fetchUser = require("../Middleware/fetchUser");
const { createBooking, deleteBooking, getBookings, issueBooking } = require("../Controllers/Booking.controller");

const router = express.Router();

router.get("/getbookings", fetchUser, getBookings);
router.post("/createbooking", createBooking);
router.post("/issueBooking/:id", fetchUser, issueBooking);
router.delete("/deletebooking/:id", fetchUser, deleteBooking);

module.exports = router;
