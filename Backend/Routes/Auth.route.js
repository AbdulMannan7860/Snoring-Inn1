import express from "express";

import fetchUser from "../Middleware/fetchUser.js";

import { getUsers, login, register, resetPassword } from "../Controllers/Auth.controller.js";

const router = express.Router();

router.get("/getusers", fetchUser, getUsers);
router.post("/register", register);
router.post("/login", login);
router.post("/resetPassword", fetchUser, resetPassword);

export default router