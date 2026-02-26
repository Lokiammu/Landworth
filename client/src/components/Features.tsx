"use client";

import React from "react";
import { motion } from "framer-motion";

/* ═══ CUSTOM GOLD SVG ICONS ═══════════════════════════════════════════ */
const IndiaMapIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M11 2L13 2L14 5L16 6L18 10L16 14L14 18L12 21L10 18L8 14L6 10L8 6L9 5Z" strokeLinejoin="round" />
    </svg>
);
const TrendRupeeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M22 7L14 15L10 11L2 19" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 7H22V13" strokeLinecap="round" strokeLinejoin="round" />
        <text x="4" y="10" fontSize="8" fill="currentColor" stroke="none" fontWeight="bold">₹</text>
    </svg>
);
const AshokaShieldIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" />
        <circle cx="12" cy="11" r="3.5" />
        <line x1="12" y1="7.5" x2="12" y2="14.5" />
        <line x1="8.5" y1="11" x2="15.5" y2="11" />
    </svg>
);
const GovSealIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M4 21h16M4 18h16M6 18V8M10 18V8M14 18V8M18 18V8M12 2L2 8h20L12 2z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const features = [
    {
        icon: IndiaMapIcon, title: "Global Coverage",
        telugu: "విశ్వవ్యాప్త కవరేజ్",
        desc: "Assess land value anywhere with our interactive 3D map engine.",
    },
    {
        icon: TrendRupeeIcon, title: "Market Trends",
        telugu: "మార్కెట్ ధోరణులు",
        desc: "Real-time analytics and predictive ₹ price modeling.",
    },
    {
        icon: AshokaShieldIcon, title: "Verified Accuracy",
        telugu: "ధృవీకరించిన కచ్చితత్వం",
        desc: "Back-tested against millions of real transactions.",
    },
    {
        icon: GovSealIcon, title: "Government Aligned",
        telugu: "ప్రభుత్వ అనుగుణంగా",
        desc: "Cross-verified with AP RTGS registration data and municipal records.",
    },
];

export function Features() {
    return (
        <section data-theme="light" className="relative z-10 py-28 md:py-36 bg-[#FAFAF6] border-t-[8px] border-[#C9A84C] overflow-hidden">
            {/* Authentic Indian Background Pattern/Watermark */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.03] pointer-events-none translate-x-1/2 -translate-y-1/4">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#C9A84C" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.6,-46.3C91.4,-33.5,98,-18,97,-3.1C96,11.8,87.4,26.2,76.5,38.1C65.6,50,52.4,59.4,38.6,66.9C24.8,74.4,10.4,80,-4.5,82.6C-19.4,85.2,-38.8,84.8,-53.4,77.3C-68,69.8,-77.8,55.2,-83.4,39.9C-89,24.6,-90.4,8.6,-86.6,-5.8C-82.8,-20.2,-73.8,-33,-62.4,-42.6C-51,-52.2,-37.2,-58.6,-23.8,-66.1C-10.4,-73.6,2.6,-82.2,16.2,-81.9C29.8,-81.6,41.6,-72.4,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="max-w-7xl px-6 md:px-8 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-20 text-center md:text-left"
                >
                    <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C9A84C]">
                        Features
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tighter text-black leading-tight">
                        Precision in every pixel.
                        <br />
                        <span className="text-[#C9A84C]">Value in every plot.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-[#F0EDE4] p-8 md:p-10 flex flex-col gap-5 group border-t-[3px] border-[#C9A84C] shadow-sm hover:shadow-[0_10px_40px_rgba(201,168,76,0.15)] transition-all relative overflow-hidden rounded-b-sm"
                        >
                            {/* Inner Certificate Border */}
                            <div className="absolute inset-2 border border-[#C9A84C] opacity-20 pointer-events-none rounded-sm" />
                            <div className="absolute inset-3 border border-[#C9A84C] opacity-10 pointer-events-none rounded-sm" />

                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#C9A84C] shadow-sm group-hover:scale-110 transition-transform border border-[#C9A84C]/20 relative z-10">
                                <f.icon />
                            </div>
                            <h3 className="text-xl font-black tracking-tight text-black relative z-10 mt-2">{f.title}</h3>
                            <span className="font-telugu text-xs text-[#C9A84C] italic -mt-4 relative z-10">{f.telugu}</span>
                            <p className="text-sm text-black/60 leading-relaxed font-medium relative z-10">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
