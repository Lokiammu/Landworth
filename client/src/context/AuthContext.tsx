"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { api } from "@/lib/api";

// ─── Types ─────────────────────────────────────────────────────────
export interface AuthUser {
    id?: string;
    email: string;
    name: string;
}

interface AuthContextType {
    user: AuthUser | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<string | null>;
    signup: (name: string, email: string, password: string) => Promise<string | null>;
    logout: () => Promise<void>;
    refreshSession: () => Promise<void>;
}

// ─── Context ───────────────────────────────────────────────────────
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ─── Token refresh interval (refresh 15 min before 2h expiry) ─────
const REFRESH_INTERVAL_MS = 105 * 60 * 1000; // 1h 45min

// ─── Provider ──────────────────────────────────────────────────────
export function AuthProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const [user, setUser] = useState<AuthUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // ─── Fetch current session from /api/auth/me ──────────────
    const refreshSession = useCallback(async () => {
        try {
            const { data, error } = await api.auth.me();
            if (!error && data?.authenticated && data?.user) {
                setUser(data.user);
            } else {
                setUser(null);
            }
        } catch {
            setUser(null);
        }
    }, []);

    // ─── Initial load: check session ──────────────────────────
    useEffect(() => {
        const init = async () => {
            setIsLoading(true);
            await refreshSession();
            setIsLoading(false);
        };
        init();
    }, [refreshSession]);

    // ─── Refresh session on route change ──────────────────────
    useEffect(() => {
        // Silently revalidate session on navigation
        refreshSession();
    }, [pathname, refreshSession]);

    // ─── Auto-refresh token before expiry ─────────────────────
    useEffect(() => {
        if (!user) return;

        const interval = setInterval(async () => {
            const { data, error } = await api.auth.refresh();
            if (error || !data?.authenticated) {
                setUser(null);
                router.push("/login");
            }
        }, REFRESH_INTERVAL_MS);

        return () => clearInterval(interval);
    }, [user, router]);

    // ─── Login ────────────────────────────────────────────────
    const login = useCallback(async (email: string, password: string): Promise<string | null> => {
        const { data, error } = await api.auth.login(email, password);
        if (error) return error;

        if (data?.user) {
            setUser(data.user);
        }
        return null;
    }, []);

    // ─── Signup ───────────────────────────────────────────────
    const signup = useCallback(async (name: string, email: string, password: string): Promise<string | null> => {
        const { data, error } = await api.auth.signup(name, email, password);
        if (error) return error;

        if (data?.user) {
            setUser(data.user);
        }
        return null;
    }, []);

    // ─── Logout ───────────────────────────────────────────────
    const logout = useCallback(async () => {
        await api.auth.logout();
        setUser(null);
        router.push("/");
        router.refresh();
    }, [router]);

    const value: AuthContextType = {
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        refreshSession,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

// ─── Hook ──────────────────────────────────────────────────────────
export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
