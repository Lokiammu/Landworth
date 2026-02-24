"use client";

import React from "react";
import { motion } from "framer-motion";

/* ═══ AUTHENTIC INDIAN SVG ICONS ═══════════════════════════════════════════ */
const TempleIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 2L2 8h20L12 2zM4 10v10M8 10v10M12 10v10M16 10v10M20 10v10M2 20h20M2 22h20" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const YantraIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <polygon points="12,2 22,22 2,22" strokeLinejoin="round" />
        <polygon points="12,22 2,2 22,2" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
);

const LotusIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 22c0-8-4-12-4-12s3-1 4-2c1 1 4 2 4 2s-4 4-4 12" />
        <path d="M12 22c0-5-5-10-8-12 0 0 4-2 6-1 2 1 2 13 2 13" />
        <path d="M4 10s-2 2-2 4c0 3 10 8 10 8s10-5 10-8c0-2-2-4-2-4" strokeLinecap="round" />
    </svg>
);

const AshokaChakraIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M5.6 18.4L18.4 5.6M8.8 3.5l6.4 17M3.5 8.8l17 6.4M3.5 15.2l17-6.4M15.2 3.5l-6.4 17" strokeWidth="0.5" />
    </svg>
);

const badges = [
    { title: "AP RTGS Aligned", icon: TempleIcon },
    { title: "GIS Powered", icon: YantraIcon },
    { title: "Precision Validated", icon: LotusIcon },
    { title: "Built for Bharat", icon: AshokaChakraIcon },
];

export function TrustAuthenticity() {
    return (
        <section
            id="about"
            data-theme="light"
            className="relative z-10 py-16 md:py-20 bg-[#FAFAF6] overflow-hidden"
        >
            {/* Soft Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.06),transparent_70%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,rgba(201,168,76,0.06),transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl px-6 md:px-8 mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <span className="w-8 h-[1px] bg-[#C9A84C]" />
                        <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C9A84C]">
                            Trust & Authenticity
                        </span>
                        <span className="w-8 h-[1px] bg-[#C9A84C]" />
                    </div>
                    <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tighter leading-[1.1]">
                        <span className="text-black">Built for Bharat.</span>
                        <br />
                        <span className="text-[#C9A84C] drop-shadow-[0_2px_10px_rgba(201,168,76,0.2)]">Verified for AP.</span>
                    </h2>
                    <p className="mt-3 font-telugu text-lg text-[#C9A84C]/80 font-semibold italic">
                        భారత్ కోసం నిర్మించబడింది.
                    </p>
                </motion.div>

                {/* Light Badges with Golden Icons */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
                    {badges.map((b, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            className="flex items-center gap-3 px-5 py-3 bg-white border border-[#C9A84C]/30 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_0_20px_rgba(201,168,76,0.15)] hover:border-[#C9A84C] transition-all cursor-default group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9A84C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="text-[#C9A84C] relative z-10 group-hover:scale-110 transition-transform">
                                <b.icon />
                            </div>
                            <span className="text-xs md:text-sm font-black uppercase tracking-widest text-black/80 group-hover:text-black relative z-10">
                                {b.title}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Luxury Testimonial inside Light Theme */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-4xl mx-auto"
                >
                    {/* The Light Plaque Box */}
                    <div className="relative bg-white p-8 md:p-12 rounded-sm shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-[#C9A84C]/40 overflow-hidden">

                        {/* Golden Corner Ornaments (SVG) */}
                        <svg className="absolute top-2 left-2 w-12 h-12 text-[#C9A84C] opacity-60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M0,0 L100,0 L100,10 L10,10 L10,100 L0,100 Z" />
                            <circle cx="20" cy="20" r="4" fill="currentColor" />
                        </svg>
                        <svg className="absolute top-2 right-2 w-12 h-12 text-[#C9A84C] opacity-60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M100,0 L0,0 L0,10 L90,10 L90,100 L100,100 Z" />
                            <circle cx="80" cy="20" r="4" fill="currentColor" />
                        </svg>
                        <svg className="absolute bottom-2 left-2 w-12 h-12 text-[#C9A84C] opacity-60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M0,100 L100,100 L100,90 L10,90 L10,0 L0,0 Z" />
                            <circle cx="20" cy="80" r="4" fill="currentColor" />
                        </svg>
                        <svg className="absolute bottom-2 right-2 w-12 h-12 text-[#C9A84C] opacity-60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M100,100 L0,100 L0,90 L90,90 L90,0 L100,0 Z" />
                            <circle cx="80" cy="80" r="4" fill="currentColor" />
                        </svg>

                        {/* Delicate Inner Borders */}
                        <div className="absolute inset-4 border border-[#C9A84C] opacity-20 pointer-events-none" />
                        <div className="absolute inset-[22px] border border-[#C9A84C] opacity-10 pointer-events-none" />

                        {/* Subtle background mandala/chakra */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] text-[#C9A84C] pointer-events-none">
                            <YantraIcon />
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            {/* Stars */}
                            <div className="flex items-center justify-center gap-1.5 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-[#C9A84C]" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-lg md:text-2xl font-medium text-black/80 leading-relaxed italic font-noto text-center max-w-2xl">
                                &ldquo;LandWorth brought complete transparency to our property transaction in Guntur. Instead of relying on brokers, we had <span className="text-[#C9A84C] font-bold">AI-verified ground-truth pricing</span> matching the Sub-Registrar records.&rdquo;
                            </p>

                            <div className="mt-8 flex flex-col items-center gap-1">
                                <span className="w-8 h-[2px] bg-[#C9A84C] mb-2" />
                                <span className="font-black text-black uppercase tracking-[0.2em] text-sm">
                                    Satyanarayana R.
                                </span>
                                <span className="font-telugu text-xs text-[#C9A84C] italic tracking-wider">
                                    భూమి వినియోగదారు · LandWorth User
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
