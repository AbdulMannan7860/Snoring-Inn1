import express from "express";

import fetchUser from "../Middleware/fetchUser.js";

import { createHotel, editHotel, deleteHotel, getHotels } from "../Controllers/Hotel.controller.js";

const router = express.Router();

router.get("/hotels", fetchUser, getHotels);
router.post("/createhotel", fetchUser, createHotel);
router.post("/edithotel/:id", fetchUser, editHotel);
router.delete("/deletehotel/:id", fetchUser, deleteHotel);

export default router