import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const mongoURI = process.env.MONGO_URI;

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB Successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

export default connectToMongo;