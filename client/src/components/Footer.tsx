"use client";

import React from "react";
import { SudarshanChakra } from "./SudarshanChakra";

export function Footer() {
    return (
        <footer data-theme="dark" className="relative z-10 bg-[#0A0A0A] border-t border-[#C9A84C]/40">
            {/* Kolam dot row divider */}
            <div className="bg-kolam-row w-full" />

            <div className="max-w-7xl px-6 md:px-8 mx-auto py-14">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
                    {/* Left — Logo */}
                    <div className="flex items-center gap-3 select-none">
                        <div className="hover:[filter:drop-shadow(0_0_8px_rgba(201,168,76,0.6))] transition-all">
                            <SudarshanChakra size={28} className="animate-spin-60s" />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-lg font-bold tracking-tight text-white">
                                LandWorth
                            </span>
                            <span className="text-[10px] font-telugu text-[#C9A84C] tracking-[0.15em]">
                                భూమి
                            </span>
                        </div>
                    </div>

                    {/* Center */}
                    <div className="flex flex-col items-center text-center gap-2">
                        <p className="text-sm font-medium text-white/50">
                            Built for Andhra Pradesh | AI + GIS Powered
                        </p>
                        <p className="font-telugu text-xs text-[#C9A84C] italic">
                            సత్య మూల్యం. సహి భూమి.
                        </p>
                    </div>

                    {/* Right — Socials */}
                    <div className="flex items-center gap-5">
                        <a href="#" className="text-xs font-bold text-white/30 hover:text-[#C9A84C] transition-colors uppercase tracking-widest">
                            Twitter
                        </a>
                        <a href="#" className="text-xs font-bold text-white/30 hover:text-[#C9A84C] transition-colors uppercase tracking-widest">
                            LinkedIn
                        </a>
                        <span className="text-base select-none">🇮🇳</span>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/5 pt-6 text-center">
                    <p className="text-[11px] text-white/25 font-medium">
                        © 2026 LandWorth. All Rights Reserved. | Not an official government portal.
                    </p>
                </div>
            </div>
        </footer>
    );
}
