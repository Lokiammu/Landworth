"use client";

import React from "react";
import { motion } from "framer-motion";

const badges = [
    { title: "AP RTGS Aligned", icon: "🏛️" },
    { title: "GIS Powered", icon: "📍" },
    { title: "AI Verified", icon: "🧠" },
    { title: "Made in India", emoji: "🇮🇳" },
];

export function TrustAuthenticity() {
    return (
        <section
            id="about"
            data-theme="light"
            className="relative z-10 py-28 md:py-36 bg-[#FAFAF6] overflow-hidden"
        >
            <div className="max-w-7xl px-6 md:px-8 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C9A84C]">
                        Trust & Authenticity
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tighter leading-tight">
                        <span className="text-black">Built for Bharat.</span>
                        <br />
                        <span className="text-[#C9A84C]">Verified for AP.</span>
                    </h2>
                    <p className="mt-3 font-telugu text-base text-black/40">
                        భారత్ కోసం నిర్మించబడింది.
                    </p>
                </motion.div>

                {/* Badges */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-20">
                    {badges.map((b, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="flex items-center gap-2.5 px-5 py-3 bg-white border border-[#C9A84C]/40 rounded-full hover:bg-[#C9A84C] hover:text-black hover:border-[#C9A84C] transition-all cursor-default group"
                        >
                            <span className="text-lg select-none">{b.emoji || b.icon}</span>
                            <span className="text-sm font-bold uppercase tracking-wide text-black group-hover:text-black">
                                {b.title}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Temple-border testimonial */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-3xl mx-auto"
                >
                    {/* Outer temple frame (SVG double-line border with corner ornaments) */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        preserveAspectRatio="none"
                        viewBox="0 0 400 300"
                        fill="none"
                    >
                        {/* Outer rect */}
                        <rect x="2" y="2" width="396" height="296" rx="4" stroke="#C9A84C" strokeWidth="2" />
                        {/* Inner rect */}
                        <rect x="8" y="8" width="384" height="284" rx="2" stroke="#C9A84C" strokeWidth="0.8" opacity="0.5" />
                        {/* Corner ornaments */}
                        {[
                            "M2,20 L2,2 L20,2", "M380,2 L398,2 L398,20",
                            "M2,280 L2,298 L20,298", "M380,298 L398,298 L398,280",
                        ].map((d, i) => (
                            <path key={i} d={d} stroke="#C9A84C" strokeWidth="3" fill="none" />
                        ))}
                    </svg>

                    <div className="relative bg-white p-10 md:p-14 rounded-sm">
                        {/* Stars */}
                        <div className="flex items-center justify-center gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-[#C9A84C] text-lg">★</span>
                            ))}
                        </div>

                        <p className="text-lg md:text-2xl font-medium text-black/75 leading-snug italic font-telugu">
                            &ldquo;LandWorth brought complete transparency to our property transaction in Guntur. Instead of relying on brokers, we had AI-verified ground-truth pricing matching the Sub-Registrar records.&rdquo;
                        </p>

                        <div className="mt-8 flex flex-col items-center gap-1">
                            <span className="font-bold text-black uppercase tracking-widest text-sm">
                                Satyanarayana R.
                            </span>
                            <span className="font-telugu text-xs text-[#C9A84C] italic">
                                భూమి వినియోగదారు · LandWorth User
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
