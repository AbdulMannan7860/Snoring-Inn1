const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const connectToMongo = require("./db/db.js");

const AuthRoute = require("./Routes/Auth.route.js");
const HotelRoute = require("./Routes/Hotel.route.js");
const BookingRoute = require("./Routes/Booking.route.js");

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
    cors({
        origin: [`${process.env.CLIENT_URL}`, 'http://localhost:5173']
    })
);

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

app.use('/api/auth', AuthRoute);
app.use('/api/hotel', HotelRoute);
app.use('/api/booking', BookingRoute);

app.get("/", (req, res) => {
    res.send("Backend server is running ! 🚀🚀🚀");
});