const express = require("express");
const fetchUser = require("../Middleware/fetchUser");
const { createHotel, editHotel, deleteHotel, getHotels } = require("../Controllers/Hotel.controller");

const router = express.Router();

router.get("/hotels", getHotels);
router.post("/createhotel", fetchUser, createHotel);
router.post("/edithotel/:id", fetchUser, editHotel);
router.delete("/deletehotel/:id", fetchUser, deleteHotel);

module.exports = router;