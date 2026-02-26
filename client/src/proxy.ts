import { NextRequest, NextResponse } from "next/server";

const SESSION_COOKIE_NAME = "landworth_session";

// Routes that require authentication
const protectedRoutes = ["/dashboard", "/profile", "/settings"];
// Routes only accessible to guests
const authRoutes = ["/login", "/signup"];

export function proxy(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route));
    const isAuthRoute = authRoutes.some((route) => path.startsWith(route));

    // Just check cookie existence — the Express backend validates it
    const hasSession = !!request.cookies.get(SESSION_COOKIE_NAME)?.value;

    // Redirect to login if accessing protected route without session
    if (isProtectedRoute && !hasSession) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // Redirect to dashboard if accessing auth route with session
    if (isAuthRoute && hasSession) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico).*)",
    ],
};
