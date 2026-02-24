"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
    {
        num: "1",
        title: "Enter Location",
        telugu: "స్థానం నమోదు చేయండి",
        desc: "Search any plot by address, survey number, or pincode in Andhra Pradesh.",
    },
    {
        num: "2",
        title: "AI Analysis",
        telugu: "AI విశ్లేషణ",
        desc: "Our model cross-checks satellite data, registration records, and local market trends.",
    },
    {
        num: "3",
        title: "Get True Value",
        telugu: "నిజమైన విలువ పొందండి",
        desc: "Receive instant verified land valuation with a detailed breakdown in ₹.",
        hasRupee: true,
    },
];

export function HowItWorks() {
    return (
        <section
            id="how-it-works"
            data-theme="dark"
            className="relative z-10 py-28 md:py-36 bg-[#0A0A0A] overflow-hidden bg-rangoli"
        >
            <div className="max-w-7xl px-6 md:px-8 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-20 text-center"
                >
                    <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C9A84C]">
                        Process
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight">
                        How LandWorth Works
                    </h2>
                    <p className="mt-2 font-telugu text-sm text-[#C9A84C]">
                        ఇది ఎలా పని చేస్తుంది
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
                    {/* Connecting gold dashed line (desktop) */}
                    <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: "70%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                        className="hidden md:block absolute top-[40px] left-[15%] h-px border-t-2 border-dashed border-[#C9A84C]/40"
                    />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.85 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="flex flex-col items-center text-center relative"
                        >
                            {/* Badge */}
                            <div className="relative w-20 h-20 rounded-full bg-[#0A0A0A] border-2 border-[#C9A84C] flex items-center justify-center shadow-[0_0_25px_rgba(201,168,76,0.15)] mb-8 hover:scale-110 transition-transform cursor-default">
                                <span className="font-inter text-2xl font-black text-[#C9A84C]">
                                    {step.num}
                                </span>
                                {step.hasRupee && (
                                    <span className="absolute text-[#C9A84C]/10 text-4xl font-black select-none">
                                        ₹
                                    </span>
                                )}
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-1">
                                {step.title}
                            </h3>
                            <span className="font-telugu text-xs text-[#C9A84C] mb-4 italic">
                                {step.telugu}
                            </span>
                            <p className="text-sm text-white/45 leading-relaxed font-medium max-w-xs">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
