"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SudarshanChakra } from "./SudarshanChakra";
import { APMapBackground } from "./APMapBackground";

interface AuthLayoutProps {
    children: React.ReactNode;
}

/**
 * Shared layout wrapper for authentication pages (Login, Signup).
 * Provides: AP map background, back-to-home link, and bottom branding.
 */
export function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <main className="min-h-screen bg-[#050505] bg-rangoli flex items-center justify-center p-6 pt-24 relative overflow-hidden">
            {/* Background Map */}
            <APMapBackground />

            {/* Content */}
            <div className="w-full max-w-md z-10 relative">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-xs font-bold tracking-widest uppercase">Back to Home</span>
                </Link>

                {children}
            </div>

            {/* Bottom Branding */}
            <div className="absolute bottom-8 left-0 w-full flex flex-col items-center gap-2 text-white/20 z-0">
                <SudarshanChakra size={24} className="opacity-20 animate-spin-60s" />
                <span className="text-[10px] font-telugu tracking-[0.2em] uppercase">
                    LandWorth · సత్య మూల్య
                </span>
            </div>
        </main>
    );
}
