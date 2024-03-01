import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB successfully connected")
    } catch (err) {
        console.error("mongodb connection error:", err);
        process.exit(1);
    }
};

export default connectDB;