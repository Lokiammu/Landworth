"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { SudarshanChakra } from "./SudarshanChakra";
import { LogOut, User } from "lucide-react";

/**
 * Lightweight Navbar for static marketing pages.
 * Does a simple /api/auth/me check to know if the user is logged in,
 * but does NOT require AuthProvider — works completely standalone.
 */
export function MarketingNavbar() {
    const [scrollY, setScrollY] = useState(0);
    const [isOnDark, setIsOnDark] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [lang, setLang] = useState<"EN" | "TE">("EN");
    const [activeSection, setActiveSection] = useState("");
    const [user, setUser] = useState<{ name: string; email: string } | null>(null);
    const [showUserMenu, setShowUserMenu] = useState(false);

    // Check auth status on mount (lightweight, no context needed)
    useEffect(() => {
        fetch("/api/auth/me", { credentials: "include" })
            .then((r) => r.json())
            .then((data) => {
                if (data.authenticated && data.user) {
                    setUser(data.user);
                }
            })
            .catch(() => { /* guest user */ });
    }, []);

    // Track scroll for chakra rotation
    useEffect(() => {
        const onScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // IntersectionObserver for dark/light detection
    useEffect(() => {
        const sections = document.querySelectorAll("[data-theme]");
        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                        const theme = (entry.target as HTMLElement).dataset.theme;
                        setIsOnDark(theme === "dark");
                    }
                }
            },
            { threshold: [0.3, 0.5, 0.7], rootMargin: "-40% 0px -40% 0px" }
        );

        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    // Observer for active navigation section
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target.id) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-30% 0px -60% 0px" }
        );

        const sections = document.querySelectorAll("section[id], div[id]");
        sections.forEach((s) => observer.observe(s));

        const handleScrollTop = () => {
            if (window.scrollY < 200) setActiveSection("");
        };
        window.addEventListener("scroll", handleScrollTop, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScrollTop);
        };
    }, []);

    // Close user menu when clicking outside
    useEffect(() => {
        if (!showUserMenu) return;
        const handleClick = () => setShowUserMenu(false);
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, [showUserMenu]);

    const chakraRotation = scrollY / 3;
    const showNav = scrollY > (typeof window !== "undefined" ? window.innerHeight * 0.85 : 600);

    const handleLogout = async () => {
        setShowUserMenu(false);
        await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
        setUser(null);
        window.location.reload();
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-500 ${showNav ? "border-b border-[#C9A84C]/30" : "border-b-0"
                }`}
            style={{
                backgroundColor: showNav
                    ? isOnDark
                        ? "rgba(10,10,10,0.85)"
                        : "rgba(250,250,246,0.9)"
                    : "transparent",
                backdropFilter: showNav ? "blur(16px)" : "none",
            }}
        >
            <div className="flex items-center justify-between px-6 py-6 mx-auto max-w-7xl">
                {/* ─── Left: Logo ────────────────────────────────────────── */}
                <div
                    className={`flex items-center gap-4 select-none transition-opacity duration-300 ${showNav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        }`}
                >
                    <div className="hover:[filter:drop-shadow(0_0_6px_rgba(201,168,76,0.6))] transition-all">
                        <SudarshanChakra
                            size={52}
                            style={{ transform: `rotate(${chakraRotation}deg)` }}
                        />
                    </div>
                    <div className="flex flex-col leading-none mt-1">
                        <span className="text-[1.65rem] font-bold tracking-tight">
                            <span className={isOnDark ? "text-white" : "text-black"}>Land</span>
                            <span className="text-[#C9A84C] font-black">Worth</span>
                        </span>
                        <span className="text-[13px] font-telugu text-[#C9A84C] tracking-[0.15em] mt-0.5 font-semibold">
                            భూమి
                        </span>
                    </div>
                </div>

                {/* ─── Center: Links ─────────────────────────────────────── */}
                <div
                    className={`hidden md:flex flex-1 justify-center items-center gap-10 text-base font-medium tracking-wide transition-opacity duration-300 ${showNav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        } ${isOnDark ? "text-white/80" : "text-black/80"}`}
                >
                    <a href="#" className={`transition-all hover:text-[#C9A84C] ${activeSection === "" ? "text-[#C9A84C] drop-shadow-[0_0_8px_rgba(201,168,76,0.5)] font-bold scale-105" : ""}`}>Home</a>
                    <a href="#how-it-works" className={`transition-all hover:text-[#C9A84C] ${activeSection === "how-it-works" ? "text-[#C9A84C] drop-shadow-[0_0_8px_rgba(201,168,76,0.5)] font-bold scale-105" : ""}`}>How It Works</a>
                    <a href="#coverage" className={`transition-all hover:text-[#C9A84C] ${activeSection === "coverage" ? "text-[#C9A84C] drop-shadow-[0_0_8px_rgba(201,168,76,0.5)] font-bold scale-105" : ""}`}>Coverage</a>
                    <a href="#about" className={`transition-all hover:text-[#C9A84C] ${activeSection === "about" ? "text-[#C9A84C] drop-shadow-[0_0_8px_rgba(201,168,76,0.5)] font-bold scale-105" : ""}`}>About</a>
                    <a href="#contact" className={`transition-all hover:text-[#C9A84C] ${activeSection === "contact" ? "text-[#C9A84C] drop-shadow-[0_0_8px_rgba(201,168,76,0.5)] font-bold scale-105" : ""}`}>Contact</a>
                </div>

                {/* ─── Right: Lang + Auth Button ────────────────────────── */}
                <div className="flex items-center gap-6">
                    <div className="pointer-events-auto flex items-center text-sm font-bold tracking-wider gap-1">
                        <button
                            onClick={() => setLang("EN")}
                            className={`px-2 py-1 rounded transition-colors ${lang === "EN"
                                ? isOnDark ? "text-white" : "text-black"
                                : isOnDark ? "text-white/40 hover:text-white/80" : "text-black/40 hover:text-black/80"
                                }`}
                        >
                            EN
                        </button>
                        <span className={isOnDark ? "text-white/20" : "text-black/20"}>|</span>
                        <button
                            onClick={() => setLang("TE")}
                            className={`px-2 py-1 rounded font-telugu transition-colors ${lang === "TE"
                                ? isOnDark ? "text-white" : "text-black"
                                : isOnDark ? "text-white/40 hover:text-white/80" : "text-black/40 hover:text-black/80"
                                }`}
                        >
                            తెలుగు
                        </button>
                    </div>

                    {/* ─── Auth: Login / User Menu ──────────────────── */}
                    {user ? (
                        /* ─── Logged In: User Avatar + Dropdown ────── */
                        <div className="relative">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowUserMenu(!showUserMenu);
                                }}
                                className={`pointer-events-auto flex items-center gap-3 px-4 py-2.5 rounded-full transition-all border ${isOnDark
                                    ? "border-[#C9A84C]/30 hover:border-[#C9A84C]/60 hover:shadow-[0_0_20px_rgba(201,168,76,0.15)]"
                                    : "border-black/20 hover:border-black/40 hover:shadow-[0_0_20px_rgba(0,0,0,0.1)]"
                                    }`}
                            >
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#e8c96a] flex items-center justify-center">
                                    <span className="text-sm font-black text-black uppercase">
                                        {user.name.charAt(0)}
                                    </span>
                                </div>
                                <span className={`text-sm font-bold hidden sm:block ${isOnDark ? "text-white" : "text-black"}`}>
                                    {user.name.split(" ")[0]}
                                </span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${showUserMenu ? "rotate-180" : ""} ${isOnDark ? "text-white/50" : "text-black/50"}`}
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {showUserMenu && (
                                <div
                                    className="absolute right-0 top-full mt-2 w-56 bg-[#111111] border border-white/10 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden z-[300]"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="px-4 py-3 border-b border-white/5">
                                        <p className="text-sm font-bold text-white truncate">{user.name}</p>
                                        <p className="text-xs text-white/40 truncate">{user.email}</p>
                                    </div>
                                    <div className="py-1">
                                        <Link
                                            href="/dashboard"
                                            onClick={() => setShowUserMenu(false)}
                                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                                        >
                                            <User size={16} />
                                            <span>Dashboard</span>
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-400/70 hover:text-red-400 hover:bg-red-500/5 transition-colors"
                                        >
                                            <LogOut size={16} />
                                            <span>Log Out</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        /* ─── Not Logged In: Login Button ──────────── */
                        <Link href="/login">
                            <button
                                className={`pointer-events-auto px-8 py-3 text-lg font-black rounded-full transition-all active:scale-95 shadow-lg ${isOnDark
                                    ? "bg-[#C9A84C] text-black hover:bg-[#e8c96a] hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(201,168,76,0.4)]"
                                    : "bg-black text-white hover:bg-black/80 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(0,0,0,0.4)]"
                                    }`}
                            >
                                Login
                            </button>
                        </Link>
                    )}

                    {/* Mobile Menu Icon */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`md:hidden p-1 transition-opacity ${showNav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                            } ${isOnDark ? "text-white" : "text-black"}`}
                    >
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* ─── Mobile Menu ─────────────────────────────────────────── */}
            {menuOpen && showNav && (
                <div
                    className={`md:hidden px-6 pb-4 flex flex-col gap-3 text-sm font-medium ${isOnDark ? "text-white/80 bg-[rgba(10,10,10,0.95)]" : "text-black/80 bg-[rgba(250,250,246,0.95)]"
                        }`}
                >
                    <a href="#" onClick={() => setMenuOpen(false)} className="py-2 hover:text-[#C9A84C]">Home</a>
                    <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="py-2 hover:text-[#C9A84C]">How It Works</a>
                    <a href="#coverage" onClick={() => setMenuOpen(false)} className="py-2 hover:text-[#C9A84C]">Coverage</a>
                    <a href="#about" onClick={() => setMenuOpen(false)} className="py-2 hover:text-[#C9A84C]">About</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)} className="py-2 hover:text-[#C9A84C]">Contact</a>

                    <div className="border-t border-white/10 pt-3 mt-1">
                        {user ? (
                            <button
                                onClick={() => { setMenuOpen(false); handleLogout(); }}
                                className="flex items-center gap-2 py-2 text-red-400/70 hover:text-red-400 transition-colors"
                            >
                                <LogOut size={16} />
                                <span>Log Out ({user.name.split(" ")[0]})</span>
                            </button>
                        ) : (
                            <Link href="/login" onClick={() => setMenuOpen(false)} className="py-2 text-[#C9A84C] font-bold hover:underline block">
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
