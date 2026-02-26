import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db";
import authRoutes from "./routes/auth";

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ────────────────────────────────────────────────────
app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// ─── Routes ───────────────────────────────────────────────────────
app.use("/api/auth", authRoutes);

// ─── Health check ─────────────────────────────────────────────────
app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ─── Start ────────────────────────────────────────────────────────
async function start() {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`\n🚀 LandWorth API Server running on http://localhost:${PORT}`);
        console.log(`   Health check: http://localhost:${PORT}/api/health\n`);
    });
}

start().catch(console.error);
