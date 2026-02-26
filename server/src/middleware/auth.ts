import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "landworth-secret-key-1234567890";
export const SESSION_COOKIE_NAME = "landworth_session";

export interface JwtPayload {
    user: { email: string; name: string };
    iat?: number;
    exp?: number;
}

/** Sign a JWT token */
export function signToken(payload: { email: string; name: string }): string {
    return jwt.sign({ user: payload }, JWT_SECRET, { expiresIn: "2h" });
}

/** Verify a JWT token */
export function verifyToken(token: string): JwtPayload {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
}

/** Set the session cookie on the response */
export function setSessionCookie(res: Response, token: string): void {
    res.cookie(SESSION_COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 2 * 60 * 60 * 1000, // 2 hours
    });
}

/** Clear the session cookie */
export function clearSessionCookie(res: Response): void {
    res.cookie(SESSION_COOKIE_NAME, "", {
        httpOnly: true,
        expires: new Date(0),
        path: "/",
    });
}

/** Express middleware: protect routes — attaches req.user */
export function requireAuth(req: Request, res: Response, next: NextFunction): void {
    const token = req.cookies?.[SESSION_COOKIE_NAME];

    if (!token) {
        res.status(401).json({ error: "Authentication required" });
        return;
    }

    try {
        const decoded = verifyToken(token);
        (req as any).user = decoded.user;
        next();
    } catch {
        clearSessionCookie(res);
        res.status(401).json({ error: "Invalid or expired session" });
    }
}
