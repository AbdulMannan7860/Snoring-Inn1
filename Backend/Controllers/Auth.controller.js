const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("../Modals/User.modal.js");

dotenv.config();

const SALT_ROUNDS = parseInt(process.env.SALT) || 10;
const PEPPER = process.env.PEPPER || 'default_pepper';

const addSaltAndPepper = async (password) => {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password + PEPPER, salt);
    return hashedPassword;
};

const generateRandomString = (length) => {
    return crypto.randomBytes(length)
        .toString('base64')
        .replace(/[^a-zA-Z0-9]/g, '')
        .substring(0, length);
};

exports.getUsers = async (req, res) => {
    try {
        const user = req.user;
        const findUser = await User.findById(user._id);

        if (!findUser) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        if (findUser.role !== "admin") {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        const users = await User.find();

        res.status(200).json({
            success: "Users fetched successfully",
            users
        });

    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({
            message: "Error fetching users",
            error: error.message
        });
    }
};

exports.register = async (req, res) => {
    try {
        const { name, email, contactInfo, role, password } = req.body;

        const userExists = await User.findOne({ email, name });

        if (userExists) {
            return res.status(401).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await addSaltAndPepper(password);

        const user = await User.create({
            name,
            email,
            contactInfo,
            role,
            password: hashedPassword
        });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        res.status(201).json({
            success: "User created successfully",
            token,
            user
        });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({
            message: "Error creating user",
            error: error.message
        });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Email not found"
            });
        }

        const isMatch = await bcrypt.compare(password + PEPPER, user.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        if (!user.resetLink || user.resetLink === "" || user.resetLink === null) {
            const link = generateRandomString(10);
            const resetLink = `/reset/${user._id}/${link}`;
            user.resetLink = resetLink;
            await user.save();
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        const userWithoutPassword = user.toObject();
        delete userWithoutPassword.password;

        res.status(200).json({
            success: "User Logged in successfully",
            token,
            user: userWithoutPassword
        });
    } catch (error) {
        console.error("Error in login function:", error);
        res.status(500).json({
            message: "Error in login function",
            error: error.message
        });
    }
};

exports.resetPassword = async (req, res) => {
    try {
        const user = req.user._id;
        const { password } = req.body;

        if (!password || !user) {
            return res.status(401).json({
                message: "Invalid Request"
            });
        }

        const userExists = await User.findById(user);

        if (!userExists) {
            return res.status(401).json({
                message: "Invalid Request"
            });
        }

        if (!userExists.resetLink || userExists.resetLink === "" || userExists.resetLink === null) {
            const link = generateRandomString(10);
            const newLink = `/reset/${user._id}/${link}`;
            userExists.resetLink = newLink;
            await userExists.save();
        }

        const hashedPassword = await addSaltAndPepper(password);

        userExists.password = hashedPassword;
        await userExists.save();

        res.status(200).json({
            message: "Password reset successfully"
        });
    } catch (error) {
        console.error("Error in reset function:", error);
        res.status(500).json({
            message: "Error in reset function",
            error: error.message
        });
    }
};
