/**
 * Frontend-only auth constants.
 * All actual auth logic lives in the Express backend + AuthContext.
 */
export const SESSION_COOKIE_NAME = "landworth_session";

/** Check if session cookie exists (client-side only check, NOT secure validation) */
export function hasSessionCookie(): boolean {
    if (typeof document === "undefined") return false;
    return document.cookie.includes(SESSION_COOKIE_NAME);
}
