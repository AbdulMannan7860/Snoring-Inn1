const express = require("express");
const fetchUser = require("../Middleware/fetchUser");
const { getUsers, login, register, resetPassword } = require("../Controllers/Auth.controller");

const router = express.Router();

router.get("/getusers", fetchUser, getUsers);
router.post("/register", register);
router.post("/login", login);
router.post("/resetPassword", fetchUser, resetPassword);

module.exports = router;
