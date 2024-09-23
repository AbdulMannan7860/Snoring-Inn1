import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectToMongo from "./db/db.js";

import AuthRoute from "./Routes/Auth.route.js";
import HotelRoute from "./Routes/Hotel.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

connectToMongo()
    .then(() => {
        app.listen(port, () => {
            console.log(`Snoring-Inn app listening on port ${port}`);
        });
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err.message);
        process.exit(1);
    });

app.use('/api/auth', AuthRoute)
app.use('/api/hotel', HotelRoute)

app.get("/", (req, res) => {
    res.send("Backend server is running ! 🚀🚀🚀");
});