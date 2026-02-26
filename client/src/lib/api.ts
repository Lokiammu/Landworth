/**
 * Centralized API client for making requests to the Express backend.
 * All API calls go through Next.js rewrites → Express server.
 */

const API_BASE = "/api";

interface ApiResponse<T = any> {
    data: T | null;
    error: string | null;
    status: number;
}

async function request<T = any>(
    endpoint: string,
    options: RequestInit = {}
): Promise<ApiResponse<T>> {
    try {
        const res = await fetch(`${API_BASE}${endpoint}`, {
            headers: {
                "Content-Type": "application/json",
                ...options.headers,
            },
            credentials: "include",
            ...options,
        });

        const data = await res.json();

        if (!res.ok) {
            return { data: null, error: data.error || "Request failed", status: res.status };
        }

        return { data, error: null, status: res.status };
    } catch (err: any) {
        return { data: null, error: err.message || "Network error", status: 0 };
    }
}

export const api = {
    auth: {
        login: (email: string, password: string) =>
            request("/auth/login", {
                method: "POST",
                body: JSON.stringify({ email, password }),
            }),

        signup: (name: string, email: string, password: string) =>
            request("/auth/signup", {
                method: "POST",
                body: JSON.stringify({ name, email, password }),
            }),

        logout: () =>
            request("/auth/logout", { method: "POST" }),

        me: () =>
            request("/auth/me"),

        refresh: () =>
            request("/auth/refresh", { method: "POST" }),
    },
};
