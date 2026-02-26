import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env");
}

async function connectDB(): Promise<typeof mongoose> {
    try {
        const conn = await mongoose.connect(MONGODB_URI!);
        console.log(`✅ MongoDB connected: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
        process.exit(1);
    }
}

export default connectDB;
