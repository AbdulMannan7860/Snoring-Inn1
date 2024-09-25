import express from "express";

import fetchUser from "../Middleware/fetchUser.js";

import { createBooking, deleteBooking, getBookings, issueBooking } from "../Controllers/Booking.controller.js";

const router = express.Router();

router.get("/getbookings", fetchUser, getBookings);
router.post("/createbooking", fetchUser, createBooking);
router.post("/issueBooking/:id", fetchUser, issueBooking);
router.delete("/deletebooking/:id", fetchUser, deleteBooking);

export default router;