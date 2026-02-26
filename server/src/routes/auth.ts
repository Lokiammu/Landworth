import { Router, Request, Response } from "express";
import User from "../models/User";
import {
    signToken,
    setSessionCookie,
    clearSessionCookie,
    requireAuth,
    SESSION_COOKIE_NAME,
    verifyToken,
} from "../middleware/auth";

const router = Router();

// ─── POST /api/auth/signup ────────────────────────────────────────
router.post("/signup", async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.status(400).json({ error: "Name, email and password are required" });
            return;
        }

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400).json({ error: "User with this email already exists" });
            return;
        }

        // Create user
        const user = await User.create({ name, email, password });

        // Sign token + set cookie
        const token = signToken({ email: user.email, name: user.name });
        setSessionCookie(res, token);

        res.status(201).json({
            message: "Account created successfully",
            user: { id: user._id, email: user.email, name: user.name },
        });
    } catch (error: any) {
        console.error("Signup error:", error);
        res.status(500).json({ error: error.message || "Internal server error" });
    }
});

// ─── POST /api/auth/login ─────────────────────────────────────────
router.post("/login", async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ error: "Email and password are required" });
            return;
        }

        // Find user with password field
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            res.status(401).json({ error: "Invalid email or password" });
            return;
        }

        // Compare password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            res.status(401).json({ error: "Invalid email or password" });
            return;
        }

        // Sign token + set cookie
        const token = signToken({ email: user.email, name: user.name });
        setSessionCookie(res, token);

        res.status(200).json({
            message: "Login successful",
            user: { id: user._id, email: user.email, name: user.name },
        });
    } catch (error: any) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// ─── POST /api/auth/logout ────────────────────────────────────────
router.post("/logout", (_req: Request, res: Response): void => {
    clearSessionCookie(res);
    res.status(200).json({ message: "Logged out successfully" });
});

// ─── GET /api/auth/me ─────────────────────────────────────────────
router.get("/me", (req: Request, res: Response): void => {
    const token = req.cookies?.[SESSION_COOKIE_NAME];

    if (!token) {
        res.status(200).json({ authenticated: false, user: null });
        return;
    }

    try {
        const decoded = verifyToken(token);
        res.status(200).json({ authenticated: true, user: decoded.user });
    } catch {
        clearSessionCookie(res);
        res.status(200).json({ authenticated: false, user: null });
    }
});

// ─── POST /api/auth/refresh ───────────────────────────────────────
// Silently refresh the JWT if the current token is still valid.
// Called periodically by the client before the token expires.
router.post("/refresh", (req: Request, res: Response): void => {
    const token = req.cookies?.[SESSION_COOKIE_NAME];

    if (!token) {
        res.status(200).json({ authenticated: false, user: null });
        return;
    }

    try {
        const decoded = verifyToken(token);

        // Re-sign a fresh token with the same user data
        const newToken = signToken(decoded.user);
        setSessionCookie(res, newToken);

        res.status(200).json({
            authenticated: true,
            user: decoded.user,
            message: "Token refreshed",
        });
    } catch {
        clearSessionCookie(res);
        res.status(200).json({ authenticated: false, user: null });
    }
});

export default router;
