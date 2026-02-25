import { NextRequest, NextResponse } from "next/server";
import { decrypt, SESSION_COOKIE_NAME } from "@/lib/auth";

// Add paths that require authentication
const protectedRoutes = ["/dashboard", "/profile", "/settings"];
// Add paths that are only accessible to guests
const authRoutes = ["/login", "/signup"];

export async function proxy(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route));
    const isAuthRoute = authRoutes.some((route) => path.startsWith(route));

    const session = request.cookies.get(SESSION_COOKIE_NAME)?.value;

    let decoded = null;
    if (session) {
        try {
            decoded = await decrypt(session);
        } catch (e) {
            // Invalid token
        }
    }

    // Redirect to login if accessing protected route without session
    if (isProtectedRoute && !decoded) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // Redirect to dashboard if accessing auth route with valid session
    if (isAuthRoute && decoded) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};
